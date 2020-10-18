import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styles from './../styles/filter.module.css';
import { START_YEAR, YEAR_FILTER_KEY, LAUNCH_FILTER_KEY, LAND_FILTER_KEY } from './../constants/filter';
import FilterItem from './FilterItem';
import { getQueryString } from '../utils/common';

const years = [];
const currentDate = new Date();
for (let i = START_YEAR; i <= currentDate.getFullYear(); i++) {
    years.push(i);
}
const Filter = ({
    initialFilter
}) => {
    const router = useRouter()
    const [selectedFilters, setSelectedFilters] = useState(initialFilter || {});

    const onFilterSelect = (key, value) => {
        const newFilter = { ...selectedFilters };
        if (selectedFilters[key] === value) {
            delete newFilter[key];
            setSelectedFilters(newFilter);
        } else {
            newFilter[key] = value;
            setSelectedFilters(newFilter);
        }
        router.push(`/${getQueryString(newFilter)}`, undefined, { shallow: true })
    }

    return (
        <aside className={styles.filter_container}>
            <h2 className={styles.filter_heading}>Filters</h2>
            <section className={styles.section}>
                <h3 className={styles.section_heading}>Launch Year</h3>
                <div className={styles.section_values}>
                    {
                        years.map(year => (
                            <FilterItem
                                key={year}
                                type={YEAR_FILTER_KEY}
                                value={year}
                                onFilterSelect={onFilterSelect}
                                selectedFilters={selectedFilters}
                            />
                        ))
                    }
                </div>
            </section>
            <section className={styles.section}>
                <h3 className={styles.section_heading}>Successful Launch</h3>
                <div className={styles.section_values}>
                    <FilterItem
                        type={LAUNCH_FILTER_KEY}
                        value={'true'}
                        onFilterSelect={onFilterSelect}
                        selectedFilters={selectedFilters}
                    />
                    <FilterItem
                        type={LAUNCH_FILTER_KEY}
                        value={'false'}
                        onFilterSelect={onFilterSelect}
                        selectedFilters={selectedFilters}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <h3 className={styles.section_heading}>Successful Landing</h3>
                <div className={styles.section_values}>
                <FilterItem
                        type={LAND_FILTER_KEY}
                        value={'true'}
                        onFilterSelect={onFilterSelect}
                        selectedFilters={selectedFilters}
                    />
                    <FilterItem
                        type={LAND_FILTER_KEY}
                        value={'false'}
                        onFilterSelect={onFilterSelect}
                        selectedFilters={selectedFilters}
                    />
                </div>
            </section>
        </aside>
    )
};

Filter.defaultProps = {
    initialFilter: {}
}

export default Filter;