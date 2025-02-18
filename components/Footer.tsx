const Footer = () => {
    return ( 
        <div className="border-t bg-white flex flex-col lg:flex-row px-10 lg:px-0">
            <div className="flex flex-col pt-20 md:px-10 md:border-r flex-1 pb-20 gap-40">
                <div className="flex flex-col gap-4 md:max-w-md">
                    <p>Suscribe to our newsletter</p>
                    <div className="flex gap-2 flex-col md:flex-row items-center w-full">
                        <input type="text" placeholder="example@gmail.com" className="border bg-transparent px-2 py-2 w-full rounded-md"/>
                        <button className="text-white bg-slate-900 opacity-45 px-3 py-2 text-sm rounded-md">Submit</button>
                    </div>
                    <p className="text-gray-500">By Clicking the button you consent to processing to you personal data</p>
                </div>
                <div>
                    <p className="text-lg text-gray-600">@Copyright 2025, All rights reserved by Ground</p>
                </div>
            </div>

            <div className="flex flex-col flex-1 lg:pl-40 sm:pl-20 pt-20 pb-40 gap-40">
                <div className="flex gap-40">
                    <div>
                        <ul className="flex flex-col gap-4 font-bold">
                            <li>Pricing</li>
                            <li>Features</li>
                            <li>Career</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4 text-gray-500">
                            <li>Blog</li>
                            <li>Customer Stories</li>
                            <li>Terms</li>
                            <li>404</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="text-lg text-gray-600">Made with 🩶 by Kwaham Grace, don't ask too much</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
