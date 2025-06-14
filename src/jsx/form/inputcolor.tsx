//src\jsx\form\inputcolor.tsx

import { forwardRef, useState } from "react";
import { InputColorProps } from "./basecomp";
import { showColorPickerModal } from "./puselectcolor";


/**
 * 
 */
export const InputColor = forwardRef<HTMLDivElement, InputColorProps>(
    ({ classname, label, defaultvalue, onchange }, ref) => {

        const [backcolor, setBackColor] = useState(defaultvalue);

        const handleOnChange = (value: string) => {
            if (onchange) {

            }
        }

        const handleButtonColorClick = () => {
            showColorPickerModal(backcolor).then(({ confirmed, color }) => {
                if (confirmed) {
                    setBackColor(color);
                    handleOnChange(color);
                } //else {}
            });
        };

        const renderContent = () => (
            <>
                {label && <label className="w-full">{label}</label>}
                <div
                    className="inputcolor flex flex-row w-full"
                    style={{ backgroundColor: backcolor }}
                    ref={ref}  >
                    <p>{backcolor}</p>
                    <button
                        className="btnDiv ml-auto w-3/6"
                        onClick={handleButtonColorClick}
                    ></button>
                </div>
            </>
        );

        return classname ? (
            <div className={classname}>{renderContent()}</div>
        ) : (
            renderContent()
        );
    }
);

