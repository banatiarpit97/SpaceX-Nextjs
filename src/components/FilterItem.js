import React from 'react';
import styles from './../styles/filter.module.css';

const FilterItem = ({
    type, value, selectedFilters, onFilterSelect
}) => {

    return (

        <span
            onClick={() => onFilterSelect(type, value)}
            className={styles.filter_item}
            style={{ backgroundColor: (selectedFilters[type] == value) ? '#7ab80e' : '#c3de9d' }}
        >
            {value}
        </span>

    )
}

export default FilterItem;