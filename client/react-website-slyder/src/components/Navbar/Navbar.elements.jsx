import styled from 'styled-components'

export const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 84px;
    width: 100%;
    z-index: 10;
    position: fixed;
    background-color: #fff;
    margin-left: -2rem;
    padding: 0 1rem;
    .brand{
        .container{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                max-width: 170px;
            }
        }
        .toggle{
            display: none;
        }
    }

    ul{
        display: flex;
        list-style-type: none;
        gap: 4rem;
        font-weight: 700;
        margin-bottom: 0;
        background-color: #fff;
        }
        li{
            a{
                text-decoration: none;
                color: #000;
                font-size: 1.2rem;
                opacity: 0.8;
                transition: 0.1s ease-in-out;

                &:hover{
                    box-shadow: 0 0.1rem #023e83;
                    color: #023e83;
                }
            }
            &:hover .subnav{
                display: block;
            }
            .subnav::before{
                content: "";
                border-width: 20px 20px;
                border-style: solid;
                border-color: transparent transparent #fff;
                position: absolute;
                right: 80%;
                top: -35px; 
            }

            .subnav::after{
                content: "";
                position: absolute;
                right: 0;
                top: -20px; 
                width: 100%;
                height: 20px;
            }
            .subnav{
                display: none;
                position: absolute;
                box-shadow: 0 0px 10px #000;
                top: 74px;
                padding: 16px;

                li{
                    color: black;
                    text-align: center;
                    line-height: 64px;
                    min-width: 14rem;

                    &:hover > .nav_subnav{
                        display: block;
                    }

                    &:hover > .nav_subnav-short{
                        display: block;
                    }

                    .nav_subnav-short{
                        position: absolute;
                        display: none;
                        top: 70px;
                        padding: 16px;
                        right: -250px;
                        box-shadow: 0 0px 10px #000;

                        li{
                            cursor: pointer;
                            line-height: 64px;
                            min-width: 12rem;
                            font-size: 1.2rem;
                        }
                    }

                    .nav_subnav{
                        position: absolute;
                        display: none;
                        top: 0;
                        padding: 16px;
                        right: -250px;
                        box-shadow: 0 0px 10px #000;

                        li{
                            cursor: pointer;
                            line-height: 64px;
                            min-width: 12rem;
                            font-size: 1.2rem;
                        }
                    }

                    .nav_subnav-short::before{
                        content: "";
                        border-top: 20px solid transparent;
                        border-right: 20px solid #fff;
                        border-bottom: 20px solid transparent;
                        border-style: solid;
                        position: absolute;
                        right: 100%;
                        top: 25px; 
                    }

                    .nav_subnav-short::after{
                        content: "";
                        position: absolute;
                        right: 130px;
                        top: 20px; 
                        width: 100%;
                        height: 48px;
                    }

                    .nav_subnav::before{
                        content: "";
                        border-top: 20px solid transparent;
                        border-right: 20px solid #fff;
                        border-bottom: 20px solid transparent;
                        border-style: solid;
                        position: absolute;
                        right: 100%;
                        top: 25px; 
                    }

                    .nav_subnav::after{
                        content: "";
                        position: absolute;
                        right: 130px;
                        top: 20px; 
                        width: 100%;
                        height: 48px;
                    }
                }

                &:hover>li .subnav-two{
                    display: block;
                }
            }
        }
    }

    .IconNavbar{
        display: flex;
        
        .Fasearch, .FaCartPlus{
            font-size: 1rem;
            padding: 0 0.8rem;
            text-align: center;
            margin-top: auto;
            
            margin-bottom: auto;
            line-height: 71px;
            cursor: pointer;
            opacity: 0.4;

            &:hover{
                cursor: pointer;
                transition: 0.1s ease-in-out;
                color: #023e83;
                opacity: 1;
            }
        }

        ul{
            position: absolute;
            display: none;
            top: 74px;
            background-color: #fff;
            box-shadow: 0 0px 10px #000;
            transition: 0.3 ease-in-out;

            li{
                color: black;
                text-align: center;
                line-height: 64px;
                min-width: 18rem;
            }
        }
    }

    .button-log{
        
        margin-left: 1.2rem;
        cursor: pointer;
    
        .signup{
            padding: 0.5rem 2rem;
            border-radius: 1rem;
            background-color: #DCDCDC;
            border: none;
            margin-right: 8px;
            text-transform: uppercase;
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
            transition: 0.4s ease-in-out;
            align-items: center;
            justify-content: center;
            
            &:hover{
                background-color: #000;
                color: #fff;
            }
        }

        .rigister{
            padding: 0.5rem 2rem;
            border-radius: 1rem;
            background-color: #DCDCDC;
            border: none;
            margin-right: 8px;
            text-transform: uppercase;
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
            transition: 0.4s ease-in-out;
            align-items: center;
            justify-content: center;
            &:hover{
                background-color: #000;
                color: #fff;
            }
        }
    }

    .button-logout{

        .subnav_Link{
            position: relative;
        }
        .Icon-user{
            font-size: 1rem;
            padding: 0 0.8rem;
            text-align: center;
            margin-top: auto;
            margin-bottom: auto;
            line-height: 71px;
            cursor: pointer;
            opacity: 0.4;

            img{
                max-width: 30px;
                min-height: 30px;
                border-radius: 100%;
            }

            &:hover{
                cursor: pointer;
                transition: 0.1s ease-in-out;
                color: #023e83;
                opacity: 1;
            }

            &:hover > .subnav-icon{
                display: block;
            }

            .subnav-icon::after{
                content: "";
                width: 100%;
                position: absolute;
                top: -20px;
                right: 0;
                height: 20px;
            }

            .subnav-icon::before{
                content: "";
                border-width: 20px 20px;
                border-style: solid;
                border-color: transparent transparent #fff;
                position: absolute;
                right: 10%;
                top: -35px; 
            }

            .subnav-icon{
                background-color: #fff;
                position: absolute;
                top: 34px;
                display: none;
                right: 0;
                padding: 16px;
                box-shadow: 0 0px 10px #000;

                li{
                    font-weight: bold;
                    min-width: 14rem;
                    list-style: none;
                    line-height: 64px;
                    padding-right: 16px;
                    color: #000;

                    &:hover{
                        box-shadow: 0 0.1rem #023e83;
                        color: #023e83;
                    }
                }
            }
        }
    }
    .signout{
        padding: 0.5rem 2rem;
        border-radius: 1rem;
        background-color: #DCDCDC;
        border: none;
        margin-right: 8px;
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        transition: 0.4s ease-in-out;
        align-items: center;
        justify-content: center;
        margin-left: 0.8rem ;

        &:hover{
            background-color: #000;
            color: #fff;
        }
    }
    
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        
        .brand {
            width: 100%;
            height: 84px;
            display: flex;
            .container{
                display: flex;
                margin-left: auto;
                margin-right: auto;
                img{
                    padding-left: 1rem;
                    max-width: 150px;
                }
            }
            
            .toggle {
                display: block;
                font-size: 1.6rem;
                margin-right: 4.5rem;
                top: 0;left: 0;
                margin-left: 1rem;
                position: absolute;
            }
        }

        .IconNavbar{
            .Fasearch{
                display: none;
            }
            .FaCartPlus{
                font-size: 1.6rem;
            }
        }

        .button-log{
            .signup{
                display: none;
            }
            .rigister{
                display: none;
            }
        }

        .button-logout{
            .Icon-user{
                font-size: 1.6rem;
                margin-right: 14px;
            }
        }

        .btn-logout{
            .signout{
                display: none;
            }
        }

        ul{
            display: none;
        }
    }
`

export const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  top: ${({ state }) => (state ? "80px" : "-400px")};
  background-color: white;
  height: 40vh;
  width: 100%;
  margin-left: -2rem;
  margin-right: -2rem;
  align-items: center;
  transition: 0.3s ease-in-out;


    ul{
        list-style-type: none;
        width: 100%;

        li{
            width: 100%;
            margin: 1rem 0;
            margin-left: 2rem;

            a{
                text-decoration: none;
                color: #000;
                font-size: 1.2rem;
                transition: 0.1s ease-in-out;

                &:hover{
                    color: #023e8a;
                }
            }

            &:first-of-type {
                a{
                    color: #023e8a;
                    font-weight: 900;
                }
            }
        }
    }

    button{
        margin-right: 8px;
        height: 30px;
        width: 30%;
        cursor: pointer;
        list-style: none;
        background-color: #023e8a;
        border: none;
        transition: 0.3s ease-in-out;

        &:hover{
            background-color: #ccc;
            color: #000;
        }
    }

    .button-log{
        display: flex;
        justify-content: center;
        .signup{
            color: #fff;
            margin-right: 4px;
        }
    }

    .button-logout{
        display: flex;
        justify-content: center;
        align-items: center;
        
        .signout{
            text-align: center;
            margin-right: 8px;
            color: #fff;
            border-radius: 10px;
            height: 30px;
            width: 30%;
            cursor: pointer;
            list-style: none;
            background-color: #023e8a;
            border: none;
            transition: 0.3s ease-in-out;

            &:hover{
                background-color: #ccc;
                color: #000;
            }
        }
    }
`;