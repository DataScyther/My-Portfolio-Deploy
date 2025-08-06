const DataSpheres = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Simple CSS-based floating spheres instead of Three.js for now */}
      <div className="absolute top-20 left-20 w-8 h-8 bg-gradient-purple/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-pink/30 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-32 left-40 w-10 h-10 bg-gradient-orange/30 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

export default DataSpheres;