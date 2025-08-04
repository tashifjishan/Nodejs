#include<iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void createHead(Node*& head, Node*& tail, int value) {
    Node* newNode = new Node{value, nullptr};
    head = newNode;
    tail = newNode;
}

void enqueue(Node*& head, Node*& tail, int value) {
    if (head == nullptr) {
        createHead(head, tail, value);
        return;
    }
    Node* newNode = new Node{value, nullptr};
    tail->next = newNode;
    tail = newNode;
}

void peek(Node* head) {
    if (!head) {
        cout << "Queue is empty! Nothing to peek." << endl;
        return;
    }
    cout << "Front element: " << head->data << endl;
}

void dequeue(Node*& head, Node*& tail) {
    if (head == nullptr) return;

    Node* temp = head;

    if (head == tail) {
        delete temp;
        head = nullptr;
        tail = nullptr;
        return;
    }

    head = head->next;
    delete temp;
}

int main() {
    Node* head = nullptr;
    Node* tail = nullptr;

    enqueue(head, tail, 90);
    enqueue(head, tail, 120);
    enqueue(head, tail, 130);
    enqueue(head, tail, 230);

    peek(head); // Before dequeues

    dequeue(head, tail);
    dequeue(head, tail);
    dequeue(head, tail);
    dequeue(head, tail);

    peek(head); // After dequeues

    return 0;
}
