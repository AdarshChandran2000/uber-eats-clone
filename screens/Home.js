// used rnf to start
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        // flex : 1 makes the entire screen grey
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
        </SafeAreaView>
    );
}

// added 2 packages for searchbar
// react-native-vector-icons
// react-native-google-places-autocomplete