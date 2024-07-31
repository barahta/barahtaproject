import React, { createContext, useState } from 'react';
import {ToastContainer} from "react-toastify";


export const DataContext = createContext('')

export const DataProvider = ({ children }) => {
    const snickers = [
        {
            name: '',
            price: '',
            size: ['36','36,5','37,5','38','38,5','39','40','41','42','43','44'],
            descriptions: 'Легендарный баскетбольный силуэт поднимается на новый уровень в версии Nike Blazer Low Platform с узнаваемым лаконичным дизайном и удобной посадкой. Увеличенная цельная подошва создает уверенный образ, а верх сохраняет изящные пропорции оригинала. Классические материалы сочетаются с логотипом Swoosh в стиле ретро и мягким низкопрофильным бортиком в модели, которая всегда остается на высоте. Конструкция в спортивном стиле, изначально разработанная для игры в баскетбол, прочная строчка и удобная система шнуровки обеспечивают долговечность и длительный комфорт.',
            material: 'Верх: Кожа/Синт.кожа; Подкладка: Текстиль; Низ: Резина',
            design: 'Вьетнам',
            total: [
                {
                    size: '36',
                    total: 10
                },
                {
                    size: '36,5',
                    total: 0
                },
                {
                    size: '37,5',
                    total: 44
                },
                {
                    size: '38',
                    total: 0
                },
                {
                    size: '38,5',
                    total: 10
                },
                {
                    size: '39',
                    total: 0
                },
                {
                    size: '40',
                    total: 14
                },
                {
                    size: '41',
                    total: 11
                },
                {
                    size: '42',
                    total: 21
                },
                {
                    size: '43',
                    total: 10
                },
                {
                    size: '44',
                    total: 7
                }
            ],
            number: 'DJ0292-113',
            images: [
                {
                    position: 1,
                    url: ''
                },
                {
                    position: 2,
                    url: ''
                },
                {
                    position: 3,
                    url: ''
                },
                {
                    position: 4,
                    url: ''
                }
            ]
        },
        {
            name: '',
            price: '',
            size: ['36','36,5','37,5','38','38,5','39','40','41','42','43','44'],
            descriptions: '',
            material: '',
            design: 'Вьетнам',
            total: [
                {
                    size: '36',
                    total: 10
                },
                {
                    size: '36,5',
                    total: 0
                },
                {
                    size: '37,5',
                    total: 44
                },
                {
                    size: '38',
                    total: 0
                },
                {
                    size: '38,5',
                    total: 10
                },
                {
                    size: '39',
                    total: 0
                },
                {
                    size: '40',
                    total: 14
                },
                {
                    size: '41',
                    total: 11
                },
                {
                    size: '42',
                    total: 21
                },
                {
                    size: '43',
                    total: 10
                },
                {
                    size: '44',
                    total: 7
                }
            ],
            number: 'DJ0292-113',
            images: [
                {
                    position: 1,
                    url: ''
                },
                {
                    position: 2,
                    url: ''
                },
                {
                    position: 3,
                    url: ''
                },
                {
                    position: 4,
                    url: ''
                }
            ]
        },
    ]

    return (
        <DataContext.Provider value={{
            snickers
        }}>
            {children}
            <ToastContainer />
        </DataContext.Provider>
    );
};