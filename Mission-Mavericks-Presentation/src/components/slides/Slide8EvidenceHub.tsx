import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../common/GlassCard';
import { Modal } from '../common/Modal';
import { VideoPlayer } from '../common/VideoPlayer';
import { EVIDENCE_ITEMS, SHOWCASE_VIDEOS, GALLERY_PHOTOS } from '../../data/links';
import { EvidenceItem } from '../../types';
import { FileText, FileCode2, GitFork, Palette, Film, Images, ExternalLink, Play, FolderArchive, ChevronLeft, ChevronRight } from 'lucide-react';

export const Slide8EvidenceHub: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(SHOWCASE_VIDEOS[0]);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'FRD': return <FileText className="w-6 h-6 text-brand-blue" />;
      case 'FRS': return <FileCode2 className="w-6 h-6 text-brand-cyan" />;
      case 'Process': return <GitFork className="w-6 h-6 text-brand-green" />;
      case 'UI/UX': return <Palette className="w-6 h-6 text-brand-purple" />;
      case 'Videos': return <Film className="w-6 h-6 text-brand-orange" />;
      case 'Gallery': return <Images className="w-6 h-6 text-brand-pink" />;
      default: return <FolderArchive className="w-6 h-6 text-white" />;
    }
  };

  const handleItemClick = (item: EvidenceItem) => {
    if (item.type === 'modal-video') {
      setVideoModalOpen(true);
    } else if (item.type === 'gallery') {
      setGalleryModalOpen(true);
    } else {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-center"
      >
        The work lives{' '}
        <span className="bg-gradient-to-r from-brand-green via-brand-cyan to-brand-blue bg-clip-text text-transparent">
          beyond the showcase.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-sm sm:text-base text-brand-muted mt-2 text-center max-w-2xl"
      >
        Comprehensive project documentation, architecture blueprints, video walkthroughs, and photo archives.
      </motion.p>

      {/* 6 Category Evidence Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
      >
        {EVIDENCE_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleItemClick(item)}
            className="cursor-pointer"
          >
            <GlassCard className="h-full flex flex-col justify-between p-5 sm:p-6 group hover:border-brand-green/50">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    {getCategoryIcon(item.category)}
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-brand-green transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-brand-green group-hover:underline">
                <span>{item.actionLabel}</span>
                {item.type === 'modal-video' || item.type === 'gallery' ? (
                  <Play className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <ExternalLink className="w-3.5 h-3.5" />
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Modal Player */}
      <Modal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        kicker="EVIDENCE HUB • VIDEO PLAYLIST"
        title={selectedVideo.title}
        subtitle={selectedVideo.description}
        maxWidth="5xl"
      >
        <div className="space-y-4">
          <VideoPlayer
            src={selectedVideo.url}
            poster={selectedVideo.thumbnail}
            title={selectedVideo.title}
            autoPlay={true}
            className="w-full aspect-video"
          />

          {/* Playlist selector */}
          <div className="mt-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-brand-green mb-2">
              Available Showcase Clips ({SHOWCASE_VIDEOS.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {SHOWCASE_VIDEOS.map((vid) => (
                <button
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    selectedVideo.id === vid.id
                      ? 'bg-brand-green/20 border-brand-green text-white shadow-glow-green/20'
                      : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <span className="text-[10px] font-mono text-brand-cyan block mb-0.5">{vid.category} • {vid.duration}</span>
                  <strong className="text-xs font-bold block truncate">{vid.title}</strong>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* Gallery Lightbox Modal */}
      <Modal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
        kicker="PROGRAM MILESTONE ARCHIVE"
        title="4-Week Collaborative Journey Gallery"
        subtitle="Snapshot moments from domain deep-dives, BPMN modeling, AI builds, and final showcases."
        maxWidth="5xl"
      >
        <div className="space-y-4">
          {/* Main Focused Photo */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black aspect-video flex items-center justify-center">
            <img
              src={GALLERY_PHOTOS[activePhotoIndex].url}
              alt={GALLERY_PHOTOS[activePhotoIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <span className="text-xs font-black uppercase text-brand-green">
                {GALLERY_PHOTOS[activePhotoIndex].phase}
              </span>
              <h4 className="text-base font-bold text-white">
                {GALLERY_PHOTOS[activePhotoIndex].title}
              </h4>
              <p className="text-xs text-white/80 mt-0.5">
                {GALLERY_PHOTOS[activePhotoIndex].caption}
              </p>
            </div>

            {/* Prev/Next overlay controls */}
            <button
              onClick={() => setActivePhotoIndex((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActivePhotoIndex((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1))}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail Gallery Strip */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <button
                key={photo.id}
                onClick={() => setActivePhotoIndex(idx)}
                className={`relative rounded-xl overflow-hidden border transition-all aspect-video ${
                  idx === activePhotoIndex
                    ? 'border-brand-green ring-2 ring-brand-green/40 scale-105 shadow-glow-green/30'
                    : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={photo.url} alt={photo.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};
