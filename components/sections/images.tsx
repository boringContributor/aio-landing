import clsx from "clsx"
import Image from "next/image"
import image1 from '../../public/team.jpg' // TODO fetch from CMS
import { SimpleLayout } from "../simple-layout"

type ImagesProps = {
    urls: string[]
}
export const Images = (props: ImagesProps) => {
  
    return (
      <SimpleLayout id="bilder">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {props.urls.map((url, imageIndex) => (
            <div
              key={url + imageIndex}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl',
                props.urls[imageIndex % props.urls.length]
              )}
            >
              <Image
                fill
                src={url}
                alt="Foto von aktuellen Projekten"
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </SimpleLayout>
    )
  }