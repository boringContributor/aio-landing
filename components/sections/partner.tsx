export const Partner = () => {
    return ( 
          <div id="partner" className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight">Unsere Kooperationspartner</h2>
              <p 
                className="break-all relative mt-6 leading-8 text-gray-600 sm:max-w-md lg:max-w-none animate-fade-up"
                >
                    Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
                    labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
                    mollit id pariatur in voluptate cillum.
               </p>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                className="max-h-12 w-full object-contain object-center"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={105}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-center"
                src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                alt="Reform"
                width={104}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-center"
                src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={140}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-center"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
                alt="Laravel"
                width={136}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-center"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-center"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={147}
                height={48}
              />
            </div>
          </div>
    )
  }
  