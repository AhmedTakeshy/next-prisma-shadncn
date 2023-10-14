interface Todo {
    title: string
    description: String
    status: Status
}

enum Status {
    OPEN,
    IN_PROGRESS,
    CLOSED
}
