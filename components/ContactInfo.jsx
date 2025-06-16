'use client'

import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useDictionary } from '@/context/DictionaryContext';
import DefaultButton from './DefaultButton';


export default function ContactInfo() {
  const { dictionary } = useDictionary();

    return <>
    {dictionary && <div className='w-full text-start text-slate-50 py-10'>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item bg-light ms-0 ps-0 flex items-center mb-3">
                        <FaMapMarkerAlt className="me-5" />
                        <a className="text-decoration-none text-dark font-medium opacity-75" rel="noreferrer noopener" href={dictionary.GOOGLE_MAPS_SEDE_POSITION} target="_blank">
                          <p className="m-0">{dictionary.SERVIZIO_CLIENTI_INDIRIZZO}</p>
                        </a>
                      </li>
                      <li className="list-group-item bg-light ms-0 ps-0 flex items-center mb-3">
                        <FaWhatsapp  className="me-5" />
                        <a className="text-decoration-none text-dark font-medium opacity-75" href="tel:045 2457421" rel="noreferrer noopener">
                          <p className="m-0">045 2457421</p>
                        </a>
                      </li>
                      <li className="list-group-item bg-light ms-0 ps-0 flex items-center mb-3">
                        <FaEnvelope className="me-5" />
                        <a className="text-decoration-none text-dark font-medium opacity-75" href="mailto:info@careisgold.it" rel="noreferrer noopener">
                          <p className="m-0 lowercase">INFO@CAREISGOLD.IT</p>
                        </a>
                      </li>
                    </ul>
                    <p className="text-lg font-semibold mt-4">
                      Sede legale:
                    </p>
                    <p className="mt-2 pb-4">
                      Via Monte Baldo 14/D, Villafranca di Verona <br />
                      C.F./P.Iva 04598560235 - REA VR-433912<br />
                      CAP. 37069 SOCIALE € 2.000.000,00 i.v.<br />
                      <a className="text-decoration-none text-dark" href="mailto:careisgoldspa@pec.careisgold.it" rel="noreferrer noopener">careisgoldspa@pec.careisgold.it</a><br />
                      Operatore Professionale Oro - Codice n° 5008578
                    </p>
                    <p className="font-bold">ORARI:</p>
                    <ul className="list-none">
                      <li className="flex justify-between mb-2">
                        <span className="font-medium">Lunedì:</span>
                        <span>{dictionary.SERVIZIO_CLIENTI_ORARIO_INIZIO} / {dictionary.SERVIZIO_CLIENTI_ORARIO_FINE}</span>
                      </li>
                      <li className="flex justify-between mb-2">
                        <span className="font-medium">Martedì:</span>
                        <span>{dictionary.SERVIZIO_CLIENTI_ORARIO_INIZIO} / {dictionary.SERVIZIO_CLIENTI_ORARIO_FINE}</span>
                      </li>
                      <li className="flex justify-between mb-2">
                        <span className="font-medium">Mercoledì:</span>
                        <span>{dictionary.SERVIZIO_CLIENTI_ORARIO_INIZIO} / {dictionary.SERVIZIO_CLIENTI_ORARIO_FINE}</span>
                      </li>
                      <li className="flex justify-between mb-2">
                        <span className="font-medium">Giovedì:</span>
                        <span>{dictionary.SERVIZIO_CLIENTI_ORARIO_INIZIO} / {dictionary.SERVIZIO_CLIENTI_ORARIO_FINE}</span>
                      </li>
                      <li className="flex justify-between mb-2">
                        <span className="font-medium">Venerdì:</span>
                        <span>{dictionary.SERVIZIO_CLIENTI_ORARIO_INIZIO} / {dictionary.SERVIZIO_CLIENTI_ORARIO_FINE}</span>
                      </li>
                      <li className="flex justify-between mb-2">
                        <span className="font-medium">Sabato:</span>
                        <span>Chiuso</span>
                      </li>
                      <li className="flex justify-between mb-2">
                        <span className="font-medium">Domenica:</span>
                        <span>Chiuso</span>
                      </li>
                    </ul>
                  </div>
                  }
                  <DefaultButton text="Domande frequenti" link="/domande-frequenti" dark={true} buttonClass="mt-5"/>
    </>
}