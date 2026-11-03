/**
 * Web Speech API Audio Narrator for "BERKAH ANAK SOLEH KELAS XI"
 * Delivers warm, clear, friendly Indonesian Physics teacher speech synthesis.
 * Strictly adheres to ethical guidelines: NO claims of official national exam origin.
 */

class SpeechNarrator {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private indonesianVoice: SpeechSynthesisVoice | null = null;
  private isPausedState = false;
  private lastSpokenText = '';
  private onStateChangeCallback: ((isPlaying: boolean, isPaused: boolean) => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prioritize Indonesian voices: 'id-ID', 'id_ID', 'indonesian', etc.
    const idVoice =
      voices.find((v) => v.lang.startsWith('id') || v.lang.includes('ID')) ||
      voices.find((v) => v.name.toLowerCase().includes('indonesia'));
    if (idVoice) {
      this.indonesianVoice = idVoice;
    }
  }

  public setListener(cb: (isPlaying: boolean, isPaused: boolean) => void) {
    this.onStateChangeCallback = cb;
  }

  private notify() {
    if (!this.onStateChangeCallback) return;
    const isPlaying = this.synth ? this.synth.speaking && !this.synth.paused : false;
    this.onStateChangeCallback(isPlaying, this.isPausedState);
  }

  /**
   * Cleans text to convert raw mathematical symbols, LaTeX codes, and abbreviations
   * into natural, spoken Indonesian phrases.
   */
  public sanitizeMathForSpeech(text: string): string {
    return text
      // Clean LaTeX tags
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 per $2')
      .replace(/\\sqrt\{([^}]+)\}/g, 'akar dari $1')
      .replace(/\\sqrt\[([^\]]+)\]\{([^}]+)\}/g, 'akar pangkat $1 dari $2')
      .replace(/\\cdot/g, ' dikali ')
      .replace(/\\times/g, ' dikali ')
      .replace(/\\approx/g, ' kira-kira sama dengan ')
      .replace(/\\le/g, ' kurang dari atau sama dengan ')
      .replace(/\\ge/g, ' lebih dari atau sama dengan ')
      .replace(/\\theta/g, 'teta')
      .replace(/\\alpha/g, 'alfa')
      .replace(/\\omega/g, 'omega')
      .replace(/\\tau/g, 'torsi')
      .replace(/\\Sigma/g, 'sigma')
      .replace(/\\Delta/g, 'perubahan ')
      .replace(/\\pi/g, 'pi')
      .replace(/\\sin/g, 'sinus')
      .replace(/\\cos/g, 'cosinus')
      .replace(/\\tan/g, 'tangen')
      .replace(/\\implies/g, ' maka ')
      // Clean units and notations
      .replace(/m\/s\^2/gi, ' meter per sekon kuadrat ')
      .replace(/m\/s²/gi, ' meter per sekon kuadrat ')
      .replace(/m\/s/gi, ' meter per sekon ')
      .replace(/km\/jam/gi, ' kilometer per jam ')
      .replace(/kg·m²\/s/gi, ' kilogram meter kuadrat per sekon ')
      .replace(/kg·m²/gi, ' kilogram meter kuadrat ')
      .replace(/N·m/gi, ' Newton meter ')
      .replace(/rad\/s/gi, ' radian per sekon ')
      .replace(/rpm/gi, ' rotasi per menit ')
      .replace(/\^2/g, ' kuadrat ')
      .replace(/(\d+)\^2/g, '$1 kuadrat')
      .replace(/°/g, ' derajat ')
      // Strip leftover symbols
      .replace(/[$_\\{}]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Speaks the provided text using Indonesian TTS
   */
  public speak(rawText: string) {
    if (!this.synth) return;

    this.stop();
    this.lastSpokenText = rawText;
    const cleanSpeech = this.sanitizeMathForSpeech(rawText);

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95; // Friendly, slightly paced for clarity in physics
    utterance.pitch = 1.05; // Warm and pleasant

    if (this.indonesianVoice) {
      utterance.voice = this.indonesianVoice;
    }

    utterance.onstart = () => {
      this.isPausedState = false;
      this.notify();
    };

    utterance.onend = () => {
      this.isPausedState = false;
      this.currentUtterance = null;
      this.notify();
    };

    utterance.onerror = () => {
      this.isPausedState = false;
      this.currentUtterance = null;
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
    this.notify();
  }

  public pause() {
    if (this.synth && this.synth.speaking && !this.isPausedState) {
      this.synth.pause();
      this.isPausedState = true;
      this.notify();
    }
  }

  public resume() {
    if (this.synth && this.isPausedState) {
      this.synth.resume();
      this.isPausedState = false;
      this.notify();
    }
  }

  public repeat() {
    if (this.lastSpokenText) {
      this.speak(this.lastSpokenText);
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isPausedState = false;
      this.currentUtterance = null;
      this.notify();
    }
  }

  public get isPaused(): boolean {
    return this.isPausedState;
  }

  public get isPlaying(): boolean {
    return Boolean(this.synth && this.synth.speaking && !this.isPausedState);
  }
}

export const soundNarrator = new SpeechNarrator();
