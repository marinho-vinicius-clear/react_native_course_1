import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{

  constructor(props){
    super(props);
    this.state = { 
      feed: this.props.data
    };
  }

  render(){
    return(
      <View style={styles.areaFeed}>
        
        <View style={styles.profileView}>
          <Image
          source={{uri: this.state.feed.profileImg}}
          style={styles.fotoPerfil}
          />

          <Text style={styles.username}> {this.state.feed.name} </Text>
        </View>

        <Image
        resizeMode="cover"
        style={styles.postedPhoto}
        source={{uri: this.state.feed.postImg}}
        />


        <View style={styles.areaBtn}>
      	  <TouchableOpacity>
            <Image
            source={require('../img/like.png')}
            style={styles.iconlike}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image
            source={require('../img/send.png')}
            style={styles.iconlike}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.viewFooter}>
          <Text style={styles.footerName}>
            {this.state.feed.nome}
          </Text>

          <Text style={styles.descFooter}>
            {this.state.feed.description}
          </Text>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed:{

  },
  username:{
    fontSize: 22,
    textAlign: 'left',
    color: '#000000',
  },
  fotoPerfil:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postedPhoto:{
    flex:1,
    height: 400,
    alignItems: 'center'
  },
  profileView:{
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    padding: 8,
  },
  areaBtn:{
    flexDirection: 'row',
    padding: 5
  },
  iconlike:{
    width: 33,
    height: 33,
  },
  btnSend:{
    paddingLeft: 5,
  },
  viewFooter:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  descFooter:{
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  footerName:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  }
});

export default Lista;