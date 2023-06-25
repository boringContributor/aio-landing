import Balancer from 'react-wrap-balancer'

export const Hero = () => {
  return (
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="text-center mt-2 sm:text-4xl text-3xl font-semibold tracking-tighter text-gray-900 animate-fade-up"
                  style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
              >
                <span className="text-red-800">A</span>ll <span className="text-red-800">I</span>n <span className="text-red-800">O</span>ne Gesundheitsmanagement
              </h1>
              <div 
                className="max-w-xl animate-fade-up" 
                style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
              >
                <p className="mt-6 text-center">
                <Balancer>
                  Als Inhaber einer Physiotherapie Praxis dürfen wir jeden Tag erfahren, dass die Ressource Mensch unser wichtigstes Gut ist. Gesund zu bleiben und sich persönlich oder auch als Unternehmen weiter zu entwickeln ist heutzutage unablässig. 
                  </Balancer>
                </p>
                <p className="mt-8 text-center">
                <Balancer>
                  Bei uns ist der Name Programm. Mit unserer langjährigen Erfahrung und einem großen Netzwerk an hervorragenden Therapeuten und Coaches können wir den Bereich Gesundheit mit all seinen Facetten sei es Fitness, Entspannung, Bewegung, Ernährung oder Life Style bedienen.
                 </Balancer>
                </p>
                <p className="mt-8 text-center">
                      <Balancer>
                        Getreu unserem Motto <span className="text-red-700">Ihre Gesundheit, unsere Motivation</span> möchten wir Ihnen gerne helfen mehr Gesundheit, Leistungsfähigkeit und Bewusstsein in Ihr Leben zu integrieren.
                        Deshalb finden Sie in unserem vielfältigen Portfolio verschiedenste Möglichkeiten für Ihre Firma, Ihren Verein oder für Sie selbst.
                        Bestimmt passt eines unserer Angebote zu Ihnen.  
                      </Balancer>
                </p>
              </div>
            </div>
          </div>
            <div 
              className="animate-fade-up relative overflow-hidden rounded-3xl px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
              style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover "
                
                src={'/team.jpg'}
                alt={'Team Foto'}
              />
          </div>
        </div>
      </div>
  )
}
