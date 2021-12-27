import { createTheme } from "@mui/material/styles";


export const theme = createTheme({

    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 0
                },
                input: {
                    textAlign: 'center',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'MinecraftFive',
                    color: 'purple'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'MinecraftFive',
                    textAlign: 'center',
                    color: 'rgb(144, 106, 13)',
                    borderRadius: 0
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    backgroundColor: 'orange'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'MinecraftFive',
                    borderRadius: 0,
                    backgroundColor: 'orange',
                    color: 'purple'
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'lightgray'
                }
            }
        }
    },
    typography: {
        fontFamily: [
            'Fipps',
            'sans-serif'
        ].join(','),
        fontSize: 20,
        fontWeight: 700
    },
    button: {
        color: 'white'
    },
    
});

