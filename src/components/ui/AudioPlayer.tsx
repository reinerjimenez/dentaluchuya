"use client";

import { useRef, useState } from "react";
import { Play, Pause, Headphones } from "lucide-react";

const audioSource = "/audio-presentacion.m4a";

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loadError, setLoadError] = useState(false);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    setLoadError(false);
    if (audio.error) audio.load();

    try {
      await audio.play();
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) {
        setLoadError(true);
      }
    }
  }

  return (
    <section
      aria-label="Presentación en audio de la clínica"
      className="bg-gradient-to-r from-[#fdf8ec] via-white to-[#fdf8ec] border-b border-gold/20"
    >
      <div className="container mx-auto px-4 py-5 md:px-6 md:py-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <div className="flex shrink-0 items-center gap-3">
            <div className="premium-shadow flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient">
              <Headphones size={22} className="text-gray-950" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold leading-tight text-gray-900">
                Conócenos en 2 minutos
              </p>
              <p className="mt-0.5 text-xs leading-tight text-gray-600">
                Presentación oficial de la clínica
              </p>
            </div>
          </div>

          <div className="flex w-full flex-1 items-center gap-3">
            <span aria-hidden="true" className="w-9 shrink-0 text-right font-mono text-xs tabular-nums text-gray-600">
              {formatTime(elapsed)}
            </span>
            <input
              type="range"
              aria-label="Posición de reproducción"
              aria-valuetext={`${formatTime(elapsed)} de ${formatTime(duration)}`}
              min={0}
              max={duration}
              step={1}
              value={elapsed}
              disabled={!duration || loadError}
              onChange={(event) => {
                const audio = audioRef.current;
                if (!audio) return;
                const seconds = event.currentTarget.valueAsNumber;
                audio.currentTime = seconds;
                setElapsed(seconds);
              }}
              className="min-h-11 min-w-0 flex-1 cursor-pointer accent-gold-ink disabled:cursor-default"
            />
            <span aria-hidden="true" className="w-9 shrink-0 font-mono text-xs tabular-nums text-gray-600">
              {formatTime(duration)}
            </span>
          </div>

          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pausar audio" : "Escuchar presentación de la clínica"}
            className="premium-shadow flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-bold text-gray-950 transition-transform hover:scale-105 active:scale-95"
          >
            {isPlaying ? <><Pause size={16} /> Pausar</> : <><Play size={16} /> Escuchar</>}
          </button>
        </div>

        {loadError && (
          <p role="status" className="mx-auto mt-3 max-w-3xl text-center text-sm text-gray-800">
            No pudimos reproducir la presentación. Intenta de nuevo o{" "}
            <a href={audioSource} className="inline-flex min-h-11 items-center font-semibold underline">
              abre el archivo de audio
            </a>.
          </p>
        )}
        <noscript>
          <p className="mt-3 text-center">
            <a href={audioSource} className="inline-flex min-h-11 items-center font-semibold text-gold-ink underline">
              Abrir la presentación en audio
            </a>
          </p>
        </noscript>
      </div>

      <audio
        ref={audioRef}
        src={audioSource}
        preload="none"
        onTimeUpdate={({ currentTarget }) => setElapsed(currentTarget.currentTime)}
        onDurationChange={({ currentTarget }) => setDuration(Number.isFinite(currentTarget.duration) ? currentTarget.duration : 0)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setLoadError(true);
          setIsPlaying(false);
        }}
      />
    </section>
  );
};

export default AudioPlayer;
