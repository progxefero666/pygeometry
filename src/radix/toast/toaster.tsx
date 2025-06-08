//src\radix\toaster.tsx

"use client"

import { useToast } from "@/application/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport} from "@/radix/toast/toast";

/**
 * 
 * @returns 
 */
export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>

      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      
      <ToastViewport />

    </ToastProvider>
  )

}//end component
