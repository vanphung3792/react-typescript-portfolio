import { AtSymbolIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid"

const Contact = () => {
  return (
    <div
      id="contact"
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-y-4
        p-[10%]
        text-dark
      "
    >
      <h3>get in touch</h3>
      <h2>- CONTACT -</h2>
      <div
        className="
          h-[1px]
          w-[20%]
          bg-dark
          mt-8
        "
      ></div>
      <ul className="flex flex-col justify-center gap-4 mt-8">
        <li className="flex flex-row gap-2">
          <div><AtSymbolIcon className="w-6 h-6" /></div>
          <span className="text-sm">annphung5126@gmail.com</span>
        </li>
        <li className="flex flex-row gap-2">
          <div><DevicePhoneMobileIcon className="w-6 h-6" /></div>
          <span className="text-sm">{`(343)-987-5126`}</span>
        </li>
      </ul>
    </div>
  )
}
export default Contact