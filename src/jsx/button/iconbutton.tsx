import { AppUIButtons } from "@/application/appui";
import { DdConstants } from "@/lib/common/ddconstants";
import { ThemeColors } from "@/style/apptheme";
import { AppThemifyIcons } from "../icons/appthicons";



export interface XButtonIfc {    
    callback: (operation: string) => void; 
    operation?: string;
    btnsize?: string;
    btndisabled?: boolean;
    btncolor?: string;        
    btntext?:string;
    iconname?: string;
    iconcolor?: string;
    iconsize?: string;     
}
export function XButtonIcon({ callback,operation,
                              btnsize,btntext,btncolor,btndisabled,
                              iconname,iconsize,iconcolor}: XButtonIfc) {

    const btn_disabled:boolean  = btndisabled ?? false;
    const btn_color: string     = btncolor ?? ThemeColors.PRIMARY;
    const btn_size: string      = btnsize ?? AppUIButtons.DEF_SIZE;
    const btn_class:string      = AppUIButtons.getButtonClass(btn_color,btn_size);
    const btn_oper: string      = operation ?? DdConstants.UNDEFINED;              

    let iconclass:string = DdConstants.UNDEFINED;
    if(iconname){
        const icon_size: string = iconsize ?? AppThemifyIcons.DEF_SIZE;        
        iconclass= AppThemifyIcons.getIconClass(iconname,icon_size,iconcolor);
    }
    
    const handleOnClick = () => {
        callback(btn_oper);        
    };
    
    return (
        <button className={btn_class} 
                onClick={handleOnClick} 
                disabled={btn_disabled}>
            {btntext? btntext:null}        
            {iconname ? <div className={iconclass} />:null }            
        </button>
    )

} //end component

/*
 const btnclass = AppButtons.getButtonClass(btncolor);
 {RenderIcon(libicon, iconclass)} 
*/