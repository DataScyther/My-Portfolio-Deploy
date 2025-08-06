const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Simple CSS particle effect */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-gradient-purple rounded-full animate-ping"></div>
      <div className="absolute top-32 right-20 w-1 h-1 bg-gradient-pink rounded-full animate-ping delay-300"></div>
      <div className="absolute bottom-20 left-32 w-1 h-1 bg-gradient-orange rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-40 right-40 w-1 h-1 bg-gradient-purple rounded-full animate-ping delay-1000"></div>
    </div>
  );
};

export default ParticleBackground;