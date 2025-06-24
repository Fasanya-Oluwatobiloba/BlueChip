// components/ui/toaster.tsx
import { Toaster as ReactHotToaster, toast } from "react-hot-toast"

export const Toaster = () => {
  return (
    <ReactHotToaster
      position="top-right"
      toastOptions={{
        className: "",
        style: {
          background: "#fff",
          color: "#000",
          zIndex: 999999,
        },
        success: {
          duration: 3000,
          iconTheme: {
            primary: "green",
            secondary: "white",
          },
        },
        error: {
          duration: 4000,
        },
      }}
    />
  )
}

export { toast }