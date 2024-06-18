import { forwardRef } from "react"

// export const Input = forwardRef(function Input({ name, type="text"}, ref) {
//     return <input ref={ref} type="text" name={name} />
// })
export function Input({ name, type="text", value, onChange }) {
    return <input value={value} type="text" name={name} onChange={onChange} />
}
