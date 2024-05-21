import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../HOCs/ScreenWrapper'
import useFetchElectro from '~/Hooks/Music/Playlists/useFetchElectro'
import useFetchHipHop from '~/Hooks/Music/Playlists/useFetchHipHop'
import useFetchTopArtists from '~/Hooks/Music/TopArtists/useFetchTopArtists'
import useFetchPlaylist from '~/Hooks/Music/useFetchPlaylist'


const music = () => {
  const{isLoading,error} = useFetchPlaylist("37i9dQZF1DX5mILnBJLA26")
  return (
    <View>
      <Text style={{color:"white"}}>{ "hie"}</Text>
    </View>
  )
}

export default ScreenWrapper(music)

const styles = StyleSheet.create({})