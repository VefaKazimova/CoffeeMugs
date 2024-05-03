/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        imgMainSec: `url("https://s3-alpha-sig.figma.com/img/adaf/6685/ce73a1a27b1add9d8cca9556966e9f73?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhfJb1RXWX90Wq2eA1k6xPyVGSfTIpUQjQIsVWadIWeltuO4Tgc2D~Vwtf3F~Vzv~oSkr5oxvWClAhP2JQKR~0hpWqC60IWW3kOoYc6ZJaxsRNZs9LuYxkq7dW4tuyCGNeTlUZLDBRI1UXvzKYJNUAKfNULxF~Va6p9HY-02uK6T3fJUCOtXZKXqVlCVjX1rzrdgIoR3mVfxuEDwpuxYgPBPdjx~Qll8L~UAD5uyCyormwmC~pl2~pthYxi0w3DzdTxE5tUiXD-lHPgg921z3hEUeLezY-Z0poNdZxMTOY3RgSQKhCY6EHqkc5phrd-QX1PBEPzmKQVZsnv45J6mKw__")`,
      },
    },
  },
  plugins: [],
};
