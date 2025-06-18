const BoatVideo = () => {
  return (
    <video className="w-full h-screen object-cover animate-clip-from-top-animation" autoPlay muted loop>
      <source src="/assets/boat-video.mp4" type="video/mp4" />
    </video>
  )
}

export default BoatVideo