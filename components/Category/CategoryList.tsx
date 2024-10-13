import { categoryInitial } from '@/data/index'
import { useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function CategoryList() {
    const [categories, setCategories] = useState(categoryInitial);

    const categoryListUi = categories.map((categoryData, index) => (
        <View className='flex flex-row items-center pl-2 pr-2 mt-1 mb-1' key={index} data-id={categoryData.id}>
            <Text>{categoryData.name}</Text>
            <div className='ml-auto'>
                <AntDesign name="edit" size={24} color="black" />
                <AntDesign name="delete" size={24} color="black" /> </div>
        </View>
    ))
    return (<>
        <View className='m-2 p2'>
            <div className='flex flex-row items-center justify-between mb-4'>
                <h1 className='font-bold'>Category List</h1>
                <AntDesign name="plus" size={24} color="black" className='block self-end mr-2' />
            </div>
            {categoryListUi}
        </View>
    </>);
}