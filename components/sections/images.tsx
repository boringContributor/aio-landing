import clsx from "clsx"
import Image from "next/image"
import image1 from '../../public/team.jpg' // TODO fetch from CMS
import { SimpleLayout } from "../simple-layout"

export const Images = () => {
    const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  
    return (
      <SimpleLayout id="bilder">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {[image1, image1, image1, image1, image1].map((image, imageIndex) => (
            <div
              key={image.src + imageIndex}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
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