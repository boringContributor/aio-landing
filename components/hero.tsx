export const Hero = () => {
    return <div className="relative isolate">
    <svg
      className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          strokeWidth={0}
        />
      </svg>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
    </svg>
    <div className="overflow-hidden mt-10">
      <div className="mx-auto max-w-7xl px-6 pb-32  lg:px-8 ">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 
              className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-up"
              style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
              >
                All In One Gesundheitsmanagement
            </h1>
            <p 
              className="break-all srelative mt-6 leading-8 text-gray-600 sm:max-w-md lg:max-w-none animate-fade-up"
              style={{ animationDelay: "0.25s", animationFillMode: "backwards" }}
            >
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
              labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
              mollit id pariatur in voluptate cillum.
            </p>
          </div>
          <div className="mt-7 gap-8 sm:-mt-44 sm:pl-20 lg:mt-0 lg:pl-0">
            <img 
                src={'/team.jpg'} sizes="50vw" className="w-auto rounded-lg animate-fade-up" alt="Team Foto" 
                style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
}