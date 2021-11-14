import React, { createContext, useState, useMemo } from 'react'

// interface SetTheme {
//     setTheme: (param: string) => void
// }

export type Value = {
    theme: string,
    toggleTheme: (param: any) => void
}


const ThemeContext = createContext<Value | null>(null)

const ThemeProvider= ({ children }: any) => {
    const [theme, setTheme] = useState("dark")


    const value: Value = useMemo(() => ({
        theme,
        toggleTheme: () => {
            console.log("Theme: ", theme);
            setTheme(theme === "dark"? "light" : "dark")}
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }

