//src\jsx\form\inputlist.tsx

import { forwardRef, ChangeEvent } from "react";
import { InputFileProps } from "./basecomp";


/**
 * 
 */
export const InputMMFile = forwardRef<HTMLInputElement, InputFileProps>(
    ({name, formats,multiple, classname, label, onchange  }, ref) => {

        const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
            if(!event.target.files){
                return;
            }
            if (onchange) {
                const files: FileList = event.target.files;
                if (files && onchange) {
                    onchange(name,files);
                }
            }            
        };

        const renderContent = () => (
            <>
                {label && <label className="w-full">{label}</label>}
                <input 
                    name = {name}
                    id ="manolo"
                    ref={ref}
                    type="file"
                    className="file-input w-full"
                    multiple={multiple} 
                    accept={formats}
                    onChange={handleOnChange}
                />
            </>
        );

        return classname ? (
            <div className={classname}>{renderContent()}</div>
        ) : (
            renderContent()
        );

    });