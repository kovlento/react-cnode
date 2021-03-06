export const topicPrimaryStyle = (theme) => {
  return {
    root: {
      dispaly: 'flex',
      alignItems: 'center',
    },
    title: {
      color: '#555',
    },
    tab: {
      backgroundColor: theme.palette.primary[500],
      textAlign: 'center',
      display: 'inline-block',
      padding: '0 6px',
      color: '#fff',
      borderRadius: 3,
      marginRight: 10,
      fontSize: '12px',
    },
    top: {
      backgroundColor: theme.palette.accent[500],
    },
  }
}

export const topicSecondaryStyles = (theme) => {
  return {
    root: {
      dispaly: 'flex',
      alignItems: 'center',
      paddingTop: 3,
    },
    count: {
      textAlign: 'center',
      marginRight: 20,
    },
    username: {
      color: '#9e9e9e',
      marginRight: 20,
    },
    accentColor: {
      color: theme.palette.accent[300],
    },
  }
}

export default topicPrimaryStyle
