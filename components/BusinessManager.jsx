"use client"


import BMRobertoR from '@/public/assets/staff/businessmanager/robertoravazzolo.webp';
import BMPierluigiL from '@/public/assets/staff/businessmanager/pierluigileoni.webp';
import BMStefanoDZ from '@/public/assets/staff/businessmanager/stefanodalzovo.webp';
import BMGiacomoG from '@/public/assets/staff/businessmanager/giacomogasperini.webp';
import BMPaoloDO from '@/public/assets/staff/businessmanager/paolodellosso.webp';
import BMMaurizioG from '@/public/assets/staff/businessmanager/mauriziogottardo.webp';
import BMPascalDC from '@/public/assets/staff/businessmanager/pascaldicesare.webp';
import BMLauraP from '@/public/assets/staff/businessmanager/laurapetetta.webp';
import BMGiuliaD from '@/public/assets/staff/businessmanager/giuliadiambri.webp';
import BMRobertoA from '@/public/assets/staff/businessmanager/robertoanelli.webp';
import BMLucaB from '@/public/assets/staff/businessmanager/lucabrignoli.webp';
import BMAncaM from '@/public/assets/staff/businessmanager/ancamihoc.webp';
import BMPaoloF from '@/public/assets/staff/businessmanager/fada.webp';
import BMSilviaQ from '@/public/assets/staff/businessmanager/quercioli.webp';
import BMAlessandroA from '@/public/assets/staff/businessmanager/aquilanti.webp';
import BMStefanoB from '@/public/assets/staff/businessmanager/stefanobonelli.webp';
import BMFilippoS from '@/public/assets/staff/businessmanager/filippostrazzacapa.webp';
import BMMircoM from '@/public/assets/staff/businessmanager/matteini.webp';
import BMStefanoC from '@/public/assets/staff/businessmanager/cestele.webp';
import BMGabrielaF from '@/public/assets/staff/businessmanager/falzone.webp';
import BMMarcoD from '@/public/assets/staff/businessmanager/doni.webp';
import BMManuelaA from '@/public/assets/staff/businessmanager/angeloni.webp';
import BMAlbertoS from '@/public/assets/staff/businessmanager/saggioro.webp';
import BMSimonaP from '@/public/assets/staff/businessmanager/patera.webp';
import BMGiuseppeM from '@/public/assets/staff/businessmanager/Giuseppe Moscati.webp';
import BMAlessioDC from '@/public/assets/staff/businessmanager/Alessio De Clementi.webp';
import BMGiorgioL from '@/public/assets/staff/businessmanager/Giorgio Locatelli.webp';
import BMCatiaV from '@/public/assets/staff/businessmanager/CatiaValentini.webp';
import BMRamonA from '@/public/assets/staff/businessmanager/RamonAgosti.webp';
import VincenzoCoter from '@/public/assets/staff/businessmanager/VincenzoCoter.webp'
import GiorgioLocatelli from '@/public/assets/staff/businessmanager/GiorgioLocatelli.webp'
import IsabellaMartini from '@/public/assets/staff/businessmanager/IsabellaMartini.webp' 
import SalvatoreCampanile from '@/public/assets/staff/businessmanager/SalvatoreCampanile.webp'
import GiuliaPaoletti from '@/public/assets/staff/businessmanager/GiuliaPaoletti.webp'
import FrancescaBerto from '@/public/assets/staff/businessmanager/FrancescaBerto.webp'
import FedericoCeccarini from '@/public/assets/staff/businessmanager/FedericoCeccarini.webp'
import Image from 'next/image';





const people = [
    {
      name: 'Roberto Ravazzolo',
      role: 'Top Business Manager',
      imageUrl: BMRobertoR
    },
    {
        name: 'Pierluigi Leoni',
        role: 'Top Business Manager',
        imageUrl:BMPierluigiL
    },
    {
        name: 'Stefano Dal Zovo',
        role: 'Top Business Manager',
        imageUrl:BMStefanoDZ
    },
    {
        name: 'Giacomo Gasperini',
        role: 'Top Business Manager',
        imageUrl:BMGiacomoG
    },
    {
        name: "Paolo Dell'Osso",
        role: 'Top Business Manager',
        imageUrl:BMPaoloDO
    },
    {
        name: 'Anca Mihoc',
        role: 'Top Business Manager',
        imageUrl:BMAncaM
    },
    {
        name: 'Maurizio Gottardo',
        role: 'Business Manager',
        imageUrl:BMMaurizioG
    },
    {
        name: 'Pascal Di Cesare',
        role: 'Business Manager',
        imageUrl:BMPascalDC
    },
    {
        name: 'Laura Petetta',
        role: 'Business Manager',
        imageUrl:BMLauraP
    },
    {
        name: 'Giulia Diambri',
        role: 'Business Manager',
        imageUrl:BMGiuliaD
    },
    {
        name: 'Roberto Anelli',
        role: 'Business Manager',
        imageUrl:BMRobertoA
    },
    {
        name: 'Luca Brignoli',
        role: 'Business Manager',
        imageUrl:BMLucaB
    },
    
    {
        name: 'Paolo Fada',
        role: 'Business Manager',
        imageUrl:BMPaoloF
    },
    {
        name: 'Silvia Quercioli',
        role: 'Business Manager',
        imageUrl:BMSilviaQ
    },
    {
        name: 'Alessandro Aquilanti',
        role: 'Business Manager',
        imageUrl:BMAlessandroA
    },
    {
        name: 'Stefano Bonelli',
        role: 'Business Manager',
        imageUrl:BMStefanoB
    },
    {
        name: 'Filippo Strazzacapa',
        role: 'Business Manager',
        imageUrl:BMFilippoS
    },
    {
        name: 'Mirco Matteini',
        role: 'Business Manager',
        imageUrl:BMMircoM
    },
    {
        name: 'Stefano Cestele',
        role: 'Business Manager',
        imageUrl:BMStefanoC
    },
    {
        name: 'Gabriela Falzone',
        role: 'Business Manager',
        imageUrl:BMGabrielaF
    },
    {
        name: 'Marco Doni',
        role: 'Business Manager',
        imageUrl:BMMarcoD
    },
    {
        name: 'Manuela Angeloni',
        role: 'Business Manager',
        imageUrl:BMManuelaA
    },
    {
        name: 'Alberto Saggioro',
        role: 'Business Manager',
        imageUrl:BMAlbertoS
    },
    {
        name: 'Simona Patera',
        role: 'Business Manager',
        imageUrl:BMSimonaP
    },
    {
        name: 'Alessio De Clementi',
        role: 'Business Manager',
        imageUrl:BMAlessioDC
    },
    {
        name: 'Giuseppe Moscati',
        role: 'Business Manager',
        imageUrl:BMGiuseppeM
    },
    {
        name: 'Catia Valentini',
        role: 'Business Manager',
        imageUrl:BMCatiaV
    },
    {
        name: 'Ramon Agosti',
        role: 'Business Manager',
        imageUrl:BMRamonA
    },
    {
        name: 'Vincenzo Coter',
        role: 'Business Manager',
        imageUrl:VincenzoCoter
    },
    {
        name: 'Giorgio Locatelli',
        role: 'Business Manager',
        imageUrl:GiorgioLocatelli
    },
    {
        name: 'Isabella Martini',
        role: 'Business Manager',
        imageUrl:IsabellaMartini
    },
    {
        name: 'Salvatore Campanile',
        role: 'Business Manager',
        imageUrl:SalvatoreCampanile
    },
    {
        name: 'Francesca Berto',
        role: 'Business Manager',
        imageUrl:FrancescaBerto
    },
    {
        name: 'Federico Ceccarini',
        role: 'Business Manager',
        imageUrl:FedericoCeccarini
    },
    {
        name: 'Giulia Paoletti',
        role: 'Business Manager',
        imageUrl:GiuliaPaoletti
    }
]
  
  export default function BusinessManager() {
    return (
        <>
            <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
                {people.map((person) => (
                <li key={person.name} 
                data-aos="fade-in" data-aos-duration="1500"
                >
                    <Image height={100} width={100} className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt={person.name} />
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-neutral-200">{person.name}</h3>
                    <p className="text-sm leading-6 text-neutral-400">{person.role}</p>
                </li>
                ))}
            </ul>
        </>
    )
  }
  