<FlatList
style={styles.content}
data={question}
renderItem={(obj) => {
    return (
        <View style={styles.item}>
            <Text>{obj.item.id}</Text>
        </View>
    )
}}/>
