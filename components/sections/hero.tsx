export const Hero = () => {
  return (
      <section className="sm:py-14">
          <div className="max-w-screen-xl mx-auto md:px-8">
              <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex md:justify-center">
                  <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                      <h1
                        className="text-center mt-2 sm:text-5xl text-3xl font-semibold tracking-tighter text-gray-900 animate-fade-up"
                        style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
                      >
                        <span className="text-red-800">A</span>ll <span className="text-red-800">I</span>n <span className="text-red-800">O</span>ne <br/>Gesundheitsmanagement
                      </h1>
                      <p className="mt-3 text-gray-600 animate-fade-up" style={{ animationDelay: "0.25s", animationFillMode: "backwards" }}>
                        Als Inhaber einer Physiotherapie Praxis dürfen wir jeden Tag erfahren, dass die Ressource Mensch unser wichtigstes Gut ist. Gesund zu bleiben und sich persönlich oder auch als Unternehmen weiter zu entwickeln ist heutzutage unablässig.
                        Bei uns ist der Name Programm. Mit unserer langjährigen Erfahrung und einem großen Netzwerk an hervorragenden Therapeuten und Coaches können wir den Bereich Gesundheit mit all seinen Facetten sei es Fitness, Entspannung, Bewegung, Ernährung oder Life Style bedienen.
                        Getreu unserem Motto <span className="text-red-700">Ihre Gesundheit, unsere Motivation</span> möchten wir Ihnen gerne helfen mehr Gesundheit, Leistungsfähigkeit und Bewusstsein in Ihr Leben zu integrieren.
                        Deshalb finden Sie in unserem vielfältigen Portfolio verschiedenste Möglichkeiten für Ihre Firma, Ihren Verein oder für Sie selbst.
                        Bestimmt passt eines unserer Angebote zu Ihnen.    
                      </p>
                      <a href="#kontakt" 
                        style={{ animationDelay: "0.5s", animationFillMode: "backwards" }} 
                        className="animate-fade-up inline-flex gap-x-1 items-center text-red-600 hover:text-red-500 duration-150 font-medium">
                          Kontaktieren Sie uns
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                      </a>
                  </div>
                  <div className="flex-1 lg:block">
                      <img  
                        style={{ animationDelay: "0.5s", animationFillMode: "backwards" }} 
                        src={'/team.jpg'} className=" rounded-lg animate-fade-up" alt="Team Foto" 
                      />
                  </div>
              </div>
          </div>
      </section>
  )
}