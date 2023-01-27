import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {List} from '../components/List';
import {Card} from '../components/Card';
import {Controls} from '../components/Controls';
import {loadCountries} from "../store/countries/countriesAction";
import {selectAllCountries, selectCountriesInfo} from "../store/countries/contriesSelector";

export const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {status, error, qty} = useSelector(selectCountriesInfo);
    const countries = useSelector(selectAllCountries);

    useEffect(() => {
        if (!qty) {
        dispatch(loadCountries())
        }
    }, [qty])

    console.log(countries)

    return (
        <>
            <Controls/>

            {error && <h2>failed to fetch </h2>}
            {status === 'loading' && <h2>loading... </h2>}
            {status === 'received' && (

            <List>
                {countries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    };

                    return (
                        <Card
                            key={c.name}
                            onClick={() => navigate(`/country/${c.name}`)}
                            {...countryInfo}
                        />
                    );
                })}
            </List>
            )}
        </>
    );
};
