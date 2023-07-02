import Balancer from 'react-wrap-balancer'
import { RichText, RichTextProps } from '@graphcms/rich-text-react-renderer';

type HeroProps = {
   description: RichTextProps['content'];
   image: string;
}
export const Hero = (props: HeroProps) => {
  return (
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="text-center mt-2 sm:text-4xl text-3xl font-semibold tracking-tighter text-gray-900 animate-fade-up"
                  style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
              >
                <span className="text-red-800">a</span>ll <span className="text-red-800">i</span>n <span className="text-red-800">o</span>ne Gesundheitsmanagement
              </h1>
              <div 
                className="max-w-xl animate-fade-up" 
                style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
              >
                <RichText 
                  renderers={{
                    p: ({ children }) => <p className="mt-6 text-center"><Balancer>{children}</Balancer></p>,
                  }}
                  content={props.description}
                />
              </div>
            </div>
          </div>
            <div 
              className="animate-fade-up relative overflow-hidden rounded-3xl px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
              style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover "
                
                src={props.image}
                alt={'Team Foto'}
              />
          </div>
        </div>
      </div>
  )
}
