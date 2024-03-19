import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function Alert() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">Vielen Dank für Ihre Anfrage!</p>
        </div>
      </div>
    </div>
  )
}
