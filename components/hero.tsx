export const Hero = () => {
  return (
    <div className="overflow-hidden sm:py-16">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h1 
                className="text-center mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl animate-fade-up"
                style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
              >
                <span className="text-red-800">A</span>ll <span className="text-red-800">I</span>n <span className="text-red-800">O</span>ne Gesundheitsmanagement
              </h1>
              <p 
                className="break-all mt-6 text-lg leading-8 text-gray-600 animate-fade-up"
                style={{ animationDelay: "0.25s", animationFillMode: "backwards" }}
              >
                Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
              </p>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <img 
                src={'/team.jpg'} sizes="50vw" className="w-auto rounded-lg animate-fade-up" alt="Team Foto" 
                style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
