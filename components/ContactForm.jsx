'use client'

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
// import PrivacyData from "../../assets/privacy/cookie-privacy.json";
import ReactStars from 'react-stars';
// import GoogleMapsLoader from '../GoogleMapsLoader';


function ContactForm(props) {

  const [showPopup, setShowPopup] = useState(false);
  const [modalFade, setModalFade] = useState('fadeIn');
  const [status, setStatus] = useState(false);
  const dialogRef = useRef();
  const dialogContentRef = useRef();
  const consentRef = useRef();
  const consentContentRef = useRef();
  const newsletterRef = useRef();
  const newsletterContentRef = useRef();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [idOrigin, setIdOrigin] = useState('');
  const [newsLetterCheck, setNewsLetterCheck] = useState(false);
  const [showConsensoModal, setShowConsensoModal] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  // const consensoDatiText = PrivacyData.find((item) => item.id === props.ConsensoDatiID);
  // const newsletterText = PrivacyData.find((item) => item.id === props.NewsletterID);
  const [rating, setRating] = useState(0);
  const [address, setAddress] = useState('');
  const brevo = process.env.REACT_APP_API_BREVO
  const router = useRouter();
  const [token, setToken] = useState('');
  const [apiProvinces, setApiProvinces] = useState([]);

  function handleRatingChange(newRating) {
    setRating(newRating);
  }

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  const newsletterToggle = () => {
    setNewsLetterCheck(!newsLetterCheck);
  };

  const handelGetToken = async () => {
    try {
      const response = await fetch("https://crm.careholding.it/ws/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          AppId: "5C3FE37C-90B3-484E-A049-C6A42F6DCD2E",
          AppSecret: "787BD90B-C45F-4F75-8EBC-4565575921DC",
        },
      });

      const data = await response.json();
      const token = data.Token;

      setToken(token);
      return token;
    } catch (error) {
      console.log("Token Error:", error);
      setModalFade('fadeIn');
      setShowPopup(true);
      setStatus(false);
      reset();
    }
  };

  useEffect(() => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'IdOrigin') {
        setIdOrigin(value);
        break;
      }
    }
  }, []);

  useEffect(() => {
    if(token === '') {
      handelGetToken();
    }
  }, [token]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newsletterMail = data.email;
  
    const additionalData = {
      NomeModulo: props.LandingName,
      Provenienza: idOrigin,
      Dati: [
        { Key: "NomeCognome", Value: data.nome_cognome || '' },
        { Key: "ZonaProvenienza", Value: address || '' },
        { Key: "Telefono", Value: data.telefono || '' },
        { Key: "Email", Value: data.email || '' },
        { Key: "Options", Value: data.interesse || '' },
        { Key: "Valutazione", Value: rating || 0 },
        { Key: "Recensione", Value: data.recensione || '' },
        { Key: "Messaggio", Value: data.free_text || '' },
        { Key: "CampoLibero", Value: data.textbox || '' },
        { Key: "Provincia", Value: data.provincia || '' },
      ],
    };
  
    const responseToken = await handelGetToken();
  
    if (responseToken !== "") {
      try {
        const res = await fetch(
          "https://crm.careholding.it/ws/Call/?Cat=Leads&met=SaveLead&np=3",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              AppId: "5C3FE37C-90B3-484E-A049-C6A42F6DCD2E",
              Token: responseToken,
            },
            body: JSON.stringify(additionalData),
          }
        );
  
        if (res.ok) {
          if (props.Newsletter && newsLetterCheck) {
            const addContactToList = async (email) => {
              const url = `https://api.brevo.com/v3/contacts`;
              const data = {
                email,
                listIds: [props.NewsletterID],
              };
              const headers = {
                "api-key": brevo,
                "Content-Type": "application/json",
              };
  
              try {
                const response = await fetch(url, {
                  method: "POST",
                  headers,
                  body: JSON.stringify(data),
                });
  
                if (response.ok) {
                  const result = await response.json();
                  console.log(result);
                } else if (response.status === 400) {
                  // Contact already exists, add to list instead
                  const brevoUrl = `https://api.brevo.com/v3/contacts/lists/${props.NewsletterID}/contacts/add`;
                  const brevoData = {
                    emails: [email],
                  };
                  const brevoHeaders = {
                    "api-key": brevo,
                    "Content-Type": "application/json",
                  };
  
                  const brevoRes = await fetch(brevoUrl, {
                    method: "POST",
                    headers: brevoHeaders,
                    body: JSON.stringify(brevoData),
                  });
  
                  if (brevoRes.ok) {
                    const brevoResult = await brevoRes.json();
                    console.log(brevoResult);
                  } else {
                    console.error("Error adding to list:", await brevoRes.text());
                  }
                } else {
                  console.error("Brevo contact error:", await response.text());
                }
              } catch (error) {
                console.error("Brevo API error:", error);
              }
            };
  
            await addContactToList(newsletterMail);
          }
  
          setModalFade("fadeIn");
          setShowPopup(true);
          setStatus(true);
          reset();
        } else {
          setModalFade("fadeIn");
          setShowPopup(true);
          setStatus(false);
          reset();
        }
      } catch (error) {
        console.error("Errore invio modulo", error);
        setModalFade("fadeIn");
        setShowPopup(true);
        setStatus(false);
        reset();
      }
    } else {
      console.log("Token Error:", token);
      setModalFade("fadeIn");
      setShowPopup(true);
      setStatus(false);
      reset();
    }
  };
  

  const handleClosePopup = () => {
    setModalFade('fadeOut');
    setTimeout(() => {
      setShowPopup(false);
      dialogRef.current.close();
      setModalFade('fadeIn');
    }, 1500);
  };

  const handleSendTo = () => {
    setModalFade('fadeOut');
    setTimeout(() => {
      router.push(props.successLink);
      setShowPopup(false);
      dialogRef.current.close();
      setModalFade('fadeIn');
    }, 1500);
  }
  const openConsensoModal = () => {
    setShowConsensoModal(true);
  }

  const openNewsletterModal = () => {
    setShowNewsletterModal(true);
  }

  const handleCloseConsent = () => {
    setModalFade('fadeOut');
    setTimeout(() => {
      setShowConsensoModal(false);
      setModalFade('fadeIn');
    }, 1500);
  };

  const handleCloseNewsletter = () => {
    setModalFade('fadeOut');
    setTimeout(() => {
      setShowNewsletterModal(false);
      setModalFade('fadeIn');
    }, 1500);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (consentContentRef.current && consentContentRef.current.contains(event.target)) {
        event.stopPropagation();
      }
      if (newsletterContentRef.current && newsletterContentRef.current.contains(event.target)) {
        event.stopPropagation();
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [showPopup]);

  const handleAddress = (selectedAddress) => {
    setAddress(selectedAddress);
  };

  const handleGetProvince = async () => {
    try {
      const response = await fetch(
        "https://crm.careholding.it/ws/Call/?Cat=Geografia&met=GetProvince&np=1", {
        method: "POST",
        body: JSON.stringify({
          IdNazione: 63
        }),
        headers: {
            "Content-Type": "application/json",
            AppId: "5C3FE37C-90B3-484E-A049-C6A42F6DCD2E",
            Token: token,
        },
        });
        const data = await response.json();
      // Assuming API returns a list of province names
      setApiProvinces(data || []); // Replace 'provinces' with the correct key in API response
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  useEffect(() => {
    if(token !== '') {
      handleGetProvince();
    }
  }, [token]);


  return (
    <form id='contactForm' className='w-full md:p-10 text-start' onSubmit={handleSubmit(onSubmit)}>
      {props.Name && (
        <div className="mb-4 text-start">
          <label htmlFor="nome_cognome" className={`block ${props.NameClass}`}>{props.NameText}</label>
          <input 
            {...register("nome_cognome", {
              required: props.NameRequired ? 'Il nome e cognome è obbligatiorio' : false,
            })} 
            type="text" 
            id="nome_cognome" 
            name="nome_cognome" 
            className="w-full ps-2 py-2 mt-1 bg-neutral-800 text-slate-50 focus:outline-none focus:border-indigo-500"  
          />
          {errors.nome_cognome && <div className='text-red-500'>* {errors.nome_cognome.message}</div>}
        </div>
      )}
      {props.Tel && (
        <div className="mb-4 text-start">
          <label htmlFor="telefono" className={`block ${props.TelClass}`}>{props.TelText}</label>
          <input 
            {...register("telefono", {
              required: props.TelRequired ? 'Il telefono è obbligatorio' : false,
            })} 
            type="tel" 
            id="telefono" 
            name="telefono" 
            className="w-full ps-2 py-2 mt-1 bg-neutral-800 text-slate-50 focus:outline-none focus:border-indigo-500"  
          />
          {errors.telefono && <div className='text-red-500'>* {errors.telefono.message}</div>}
        </div>
      )}
      {props.Email && (
        <div className="mb-4 text-start">
          <label htmlFor="email" className={`block ${props.EmailClass}`}>{props.EmailText}</label>
          <input 
            {...register("email", {
              required: props.EmailRequired ? 'La email è obbligatoria' : false,
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Per favore inserisca una email valida',
              },
            })} 
            type="email" 
            id="email" 
            name="email" 
            className="w-full ps-2 py-2 mt-1 bg-neutral-800 text-slate-50 focus:outline-none focus:border-indigo-500"  
          />
          {errors.email && <div className='text-red-500'>* {errors.email.message}</div>}
        </div>
      )}
      {props.provincia && (
        <div className="mb-4 text-start">
          <label htmlFor="provincia" className={`block ${props.provinciaClass}`}>{props.provinciaText}</label>
          <select 
              {...register("provincia", {
                  required: 'Questo campo è obbligatorio',
              })} 
              id="provincia" 
              name="provincia" 
              defaultValue=""
              className="w-full mt-1 h-10 rounded bg-neutral-800 text-slate-50 focus:outline-none focus:border-indigo-500" 
              >
              <option value="" disabled >Seleziona la tua provincia</option>
              {apiProvinces.map((province) => (
              <option key={province.IDProvincia} value={province.Provincia}>
                  {province.Provincia}
              </option>
              ))}
          </select>
          {errors.provincia && <div className='text-red-500'>* {errors.provincia.message}</div>}
        </div>
      )}
      {props.location && (
        <div className="mb-4 text-start">
          <label htmlFor="location" className={`block ${props.locationClass}`}>{props.locationText}</label>
          {/* <GoogleMapsLoader handleAddress={handleAddress}/> Use GoogleMapsLoader here */}
        </div>
      )}
      {props.Dropdown && (
        <div className="mb-4 text-start">
          <label htmlFor="interesse" className={`block ${props.DropdownClass}`}>{props.DropdownText}</label>
          <select 
            {...register("interesse", {
              required: props.DropdownRequired ? 'Questo campo è obbligatorio' : false,
            })} 
            id="interesse" 
            name="interesse" 
            className="w-full mt-1 h-10 rounded bg-neutral-800 text-slate-50 focus:outline-none focus:border-indigo-500" 
          >
            {props.DropdownItem.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
          {errors.interesse && <div className='text-red-500'>* {errors.interesse.message}</div>}
        </div>
      )}
      {props.textBox && (
        <div className="mb-4 text-start">
          <label htmlFor="textbox" className={`block ${props.textBoxClass}`}>{props.textBoxText}</label>
          <input 
            {...register("textbox", {
              required: props.MessageTextRequired ? 'Questo campo è obbligatorio' : false,
            })} 
            type="text" 
            id="textbox" 
            name="textbox" 
            className="w-full ps-2 py-2 mt-1 bg-neutral-800 text-slate-50 focus:outline-none focus:border-indigo-500"  
          />
          {errors.textbox && <div className='text-red-500'>* {errors.textbox.message}</div>}
        </div>
      )}
      {props.vote && (
        <div className="mb-4 text-start">
          <label className={`block ${props.voteClass}`}>{props.voteText}</label>
          <ReactStars
            count={5}
            value={rating}
            size={40}
            half={false}
            color2={"#DBBE6F"}
            color1={"#B3B3B3"}
            onChange={handleRatingChange}
            className="mb-1"
          />
          <textarea 
            {...register("recensione", {
              required: props.MessageTextRequired ? 'Questo campo è obbligatorio' : false,
            })} 
            type="text" 
            id="recensione" 
            name="recensione" 
            rows="3" 
            className="w-full ps-2 py-2 mt-1 bg-neutral-800 text-slate-50 focus:outline-none focus:border-indigo-500"  
          />
          {errors.recensione && <div className='text-red-500'>* {errors.recensione.message}</div>}
        </div>
      )}
      {props.Message && (
        <div className="mb-3 text-start">
          <label htmlFor="free_text" className={`block ${props.MessageClass}`}>{props.MessageText}</label>
          <textarea 
            {...register("free_text", {
              required: props.MessageTextRequired ? 'Questo campo è obbligatorio' : false
            })} 
            id="free_text" 
            name="free_text" 
            rows="4" 
            className="w-full p-2 pb-10 mt-1 bg-neutral-800 text-slate-50 focus:outline-none focus:border-indigo-500"
          ></textarea>
          {errors.free_text && <div className='text-red-500'>* {errors.free_text.message}</div>}
        </div>
      )}
      {props.ConsensoDati && (
        <>
          <div className="flex-row flex items-center justify-start text-start my-2">
            <input 
              {...register("consenso_dati", {
                required: props.ConsensoDatiRequired ? 'Questo campo è obbligatorio' : false
              })}
              type="checkbox"
              id="consensoDati"
              className="me-5"
            />
            <button onClick={openConsensoModal} className={`block ${props.ConsensoDatiClass}`}>
              {props.ConsensoDatiText}
            </button>
          </div>
          {errors.consenso_dati && <div className='text-red-500'>* {errors.consenso_dati.message}</div>}
        </>
      )}
      {props.Newsletter && (
        <>
          <div className="flex-row flex items-center justify-start text-start my-2">
            <input 
              {...register("news_letter", {
                required: props.NewsletterRequired ? 'Questo campo è obbligatorio' : false
              })}
              type="checkbox"
              id="news_letter"
              className="me-5"
              onClick={newsletterToggle}
            />
            <button onClick={openNewsletterModal} className={`block ${props.NewsLetterClass}`}>
              {props.NewsletterText}
            </button>
          </div>
          {errors.news_letter && <div className='text-red-500'>* {errors.news_letter.message}</div>}
        </>
      )}
      <button 
        disabled={isSubmitting}
        type="submit" 
        className={`py-2 mt-10 uppercase ${props.SendClass} transition duration-300 ease-in-out disabled:opacity-75`}
      >
        {isSubmitting ? 'Caricamento...' : props.SendText}
      </button>

      {showPopup && (
        <dialog ref={dialogRef} className={`fixed top-0 left-0 w-full h-full flex items-center justify-center glassmorphism ${modalFade}`} id={status ? "FormCompilato" : "ErroreForm"}>
          <div ref={dialogContentRef} className={`bg-white p-8 shadow-md text-center`}>
            <p className={`${status ? 'text-green-600' : 'text-rose-700'} text-center mb-10 text-lg`}>
              {status ? props.successText : props.errorText}
            </p>
            {status ? (
              <button id='formSuccesso' onClick={handleSendTo} className={`px-10 py-2 w-full progress-button-dark border border-black text-black transition duration-300 ease-in-out`}>
                Prosegui
              </button>
            ) : (
              <button onClick={handleClosePopup} className={`px-10 py-2 w-full progress-button-dark border border-black text-black transition duration-300 ease-in-out`}>
                Riprova
              </button>
            )}
          </div>
        </dialog>
      )}

      {showConsensoModal && (
        <dialog ref={consentRef} className={`fixed top-0 left-0 w-full h-full flex items-center justify-center glassmorphism ${modalFade}`}>
          <div ref={consentContentRef} className="modal-container bg-white p-8 shadow-md md:m-56">
            <p className="text-start" dangerouslySetInnerHTML={createMarkup(consensoDatiText.content)}>
            </p>
            <div className='items-center flex flex-col'>
              <button onClick={handleCloseConsent} className="w-1/2 py-4 progress-button-dark border border-black text-black transition duration-300 ease-in-out">
                Chiudi
              </button>
            </div>
          </div>
        </dialog>
      )}

      {showNewsletterModal && (
        <dialog ref={newsletterRef} className={`fixed top-0 left-0 w-full h-full flex items-center justify-center glassmorphism ${modalFade}`}>
          <div ref={newsletterContentRef} className="modal-container bg-white p-8 shadow-md md:m-56">
            <p className="text-start" dangerouslySetInnerHTML={createMarkup(consensoDatiText.content)}>
            </p>
            <div className='items-center flex flex-col'>
              <button onClick={handleCloseNewsletter} className="w-1/2 py-4 progress-button-dark border border-black text-black transition duration-300 ease-in-out">
                Chiudi
              </button>
            </div>
          </div>
        </dialog>
      )}
    </form>
  );
}

export default ContactForm;
