import React from 'react'
import ReactDOM from 'react-dom'
import { Ars } from 'ars-arsenal'
import {Album} from './Album'
import {StatusBar} from '../statusbar/statusbar';

const options = {
  url: '/api/samplePhotos.js',

  listQuery(options) {
    return {
      term: options.search,
      sort: options.sort,
      limit: 10,
      offset: options.page * 10
    }
  },

  onError(response) {
    return `${response.code}: ${response.message}`
  },

  onChange(value) {
    console.log('Value changed to %s', value)
  },
  onFetch(response) {
    return response.data.map(function(record) {
      return {
        id: record.id,
        attribution: record.credit,
        name: record.title,
        caption: record.caption,
        url: record.imageSrc,
        tags: record.tags
      }
    })
  }
  //request: server
}
export const AlbumList = (props) => {

  const {albums} = props
  const renderAlbums = () => {
    return (
      Object.keys(albums)
      .map(key => {

        return (
          <Album 
          title="Albums" 
          options={{ ...options, multiselect: true }} /> 
        );
      })
    );
  }
  return(
   
    <div>
        <StatusBar title={`${albums.length} Albums(s) total`}>
        </StatusBar>
        <div>
        {renderAlbums()}
        </div>
    </div>
  
  )
}