

type Maybe = Just | Nothing

fun :: Maybe a => Some a
fun Nothing = []
fun Just a = a
