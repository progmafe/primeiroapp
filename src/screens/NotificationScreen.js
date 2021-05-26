import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Notifications, Permissions, Constants } from 'expo';
import moment from 'moment';

export default class NotificationScreen extends React.Component {
  async componentDidMount() {
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && result.status === 'granted') {
      alert('Notification permissions granted.')
    }

    Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    alert(`Notification (${origin}) with data: ${JSON.stringify(data)}`)
  }

  _sendImmediateNotification () {
    const localNotification = {
      title: 'Olá! Seja Bem vindo!',
      body: 'Voce acessou o Aplicativo de Imóveis da TechRabbit!',
      data: { type: 'immediate' }
    }

    console.log('Scheduling immediate notification:', { localNotification })

    Notifications.presentLocalNotificationAsync(localNotification)
      .then(id => console.info(`Immediate notification scheduled (${id})`))
      .catch(err => console.error(err))
  }

  _sendDelayedNotification () {
    const localNotification = {
      title: 'Usuário',
      body: 'Esperamos que esteja gostando da experiência!',
      data: { type: 'delayed' }
    }
    const schedulingOptions = {
      time: (new Date()).getTime() + 5000
    }

    console.log('Scheduling delayed notification:', { localNotification, schedulingOptions })

    Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions)
      .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptions.time).format()}`))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Notificação Imediata' onPress={() => this._sendImmediateNotification()} />
        <Button title='Notificação Delay' onPress={() => this._sendDelayedNotification()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
