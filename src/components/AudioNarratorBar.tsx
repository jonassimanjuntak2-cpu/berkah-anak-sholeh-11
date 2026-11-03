import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Pause, Play, RotateCcw, BookOpen, Sparkles } from 'lucide-react';
import { soundNarrator } from '../utils/soundAndTTS';

interface AudioNarratorBarProps {
  soalSpeech: string;
  pembahasanSpeech?: string;
  className?: string;
  compact?: boolean;
}

export const AudioNarratorBar: React.FC<AudioNarratorBarProps> = ({
  soalSpeech,
  pembahasanSpeech,
  className = '',
  compact = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentMode, setCurrentMode] = useState<'soal' | 'pembahasan' | null>(null);

  useEffect(() => {
    soundNarrator.setListener((playing, paused) => {
      setIsPlaying(playing);
      setIsPaused(paused);
      if (!playing && !paused) {
        setCurrentMode(null);
      }
    });

    return () => {
      soundNarrator.stop();
    };
  }, []);

  const handleReadSoal = () => {
    setCurrentMode('soal');
    soundNarrator.speak(soalSpeech);
  };

  const handleReadPembahasan = () => {
    if (!pembahasanSpeech) return;
    setCurrentMode('pembahasan');
    soundNarrator.speak(pembahasanSpeech);
  };

  const handlePause = () => {
    soundNarrator.pause();
  };

  const handleResume = () => {
    soundNarrator.resume();
  };

  const handleRepeat = () => {
    soundNarrator.repeat();
  };

  const handleStop = () => {
    soundNarrator.stop();
    setCurrentMode(null);
  };

  return (
    <div
      className={`bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-slate-800 ${className}`}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-amber-600/10 text-amber-700 flex items-center justify-center shrink-0">
          <Volume2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
            <span>Narator Guru Fisika</span>
            {isPlaying && (
              <span className="text-[10px] text-amber-700 font-medium">
                · Membacakan {currentMode === 'pembahasan' ? 'Pembahasan' : 'Soal'}
              </span>
            )}
            {isPaused && (
              <span className="text-[10px] text-amber-600 font-medium">
                · Jeda
              </span>
            )}
          </div>
          <div className="text-[11px] text-slate-500">
            Audio bimbingan suara Bahasa Indonesia
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-1.5">
        <button
          onClick={handleReadSoal}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
            currentMode === 'soal' && isPlaying
              ? 'bg-amber-700 text-white shadow-xs'
              : 'bg-white hover:bg-amber-100/70 text-slate-700 border border-slate-200'
          }`}
          title="Dengarkan pembacaan soal lengkap"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>BACA SOAL</span>
        </button>

        {pembahasanSpeech && (
          <button
            onClick={handleReadPembahasan}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
              currentMode === 'pembahasan' && isPlaying
                ? 'bg-amber-700 text-white shadow-xs'
                : 'bg-white hover:bg-amber-100/70 text-slate-700 border border-slate-200'
            }`}
            title="Dengarkan penjelasan pembahasan bertahap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACA PEMBAHASAN</span>
          </button>
        )}

        {(isPlaying || isPaused) && (
          <>
            {isPaused ? (
              <button
                onClick={handleResume}
                className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1 transition-colors"
                title="Lanjutkan suara narator"
              >
                <Play className="w-3 h-3 fill-current" />
                {!compact && <span>LANJUTKAN</span>}
              </button>
            ) : (
              <button
                onClick={handlePause}
                className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-1 transition-colors"
                title="Jeda suara sementara"
              >
                <Pause className="w-3 h-3" />
                {!compact && <span>JEDA</span>}
              </button>
            )}

            <button
              onClick={handleRepeat}
              className="p-1.5 text-xs font-medium rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
              title="Ulangi pembacaan dari awal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleStop}
              className="p-1.5 text-xs font-medium rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200"
              title="Hentikan suara"
            >
              <VolumeX className="w-3.5 h-3.5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
