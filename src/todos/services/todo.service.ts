import { Injectable, Inject } from '@nestjs/common';
import { CollectionReference } from '@google-cloud/firestore';
import { TodoDto } from '../dtos/todo.document';

@Injectable()
export class TodoService {
  constructor(
    @Inject(TodoDto.collectionName)
    private collection: CollectionReference<any>,
  ) {}

  //   async create({ name, dueDate }): Promise<TodoDto> {
  //     const docRef = this.todosCollection.doc(name);
  //     const dueDateMillis = dayjs(dueDate).valueOf();
  //     await docRef.set({
  //       name,
  //       dueDate: Timestamp.fromMillis(dueDateMillis),
  //     });
  //     const todoDoc = await docRef.get();
  //     const todo = todoDoc.data();
  //     return todo;
  //   }

  async findAll(): Promise<any[]> {
    const snapshot = await this.collection.get();
    const todos: any[] = [];
    snapshot.forEach((doc) => todos.push(doc.data()));
    return todos;
  }
}
