

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                header: "#FED046",
                myred: "#4C0000",
                darkred: '#310101'
            },
            fontFamily: {
                king: ['King'],
                saira: ['Saira'],
                poppins: ['Poppins']
            }
        },
        boxShadow: {
            glow: '0px 0px 15px 0px rgba(254,208,70,0.99)',
            glow2: '0px 0px 30px 0px rgba(254,208,70,0.99)',
            glowroad: '0px 0px 80px 45px rgba(254, 208, 70, 0.4)',
            nav: '0px 85px 25px 0px rgba(1,1,1,0.79) inset',
            
        },

        dropShadow: {
            'util': '0px 0px 66px #fed046',
        },

        textShadow: {
            tshad: '0px 10px 2px #000000'
        },
    },
    plugins: [
        require('tailwindcss-textshadow')
    ],
}
