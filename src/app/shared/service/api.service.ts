import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {}
  public async login(email: string, password: string): Promise<boolean> {
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(email, password);
      const login_id = res.user?.uid;
      if (login_id) {
        localStorage.setItem('login_id', login_id);
        return true;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  }

  public signOut(): void {
    this.afAuth.signOut();
    localStorage.removeItem('login_id');
  }

  // News Related Api

  public addNews(news: any) {
    return this.afs.collection('/News').add(news);
  }

  public getNews() {
    return this.afs.collection('News').snapshotChanges();
  }

  getNewsById(id: any) {
    return this.afs.collection('News').doc(id).valueChanges();
  }

  public deleteNews(news: any) {
    return this.afs.doc('News/' + news.id).delete();
  }

  // Category Related Api

  public addCategory(category: any) {
    return this.afs.collection('/Categorys').add(category);
  }

  public getCategory() {
    return this.afs.collection('Categorys').snapshotChanges();
  }

  public deleteCategory(category: any) {
    return this.afs.doc('Categorys/' + category.id).delete();
  }

  // Comments Related Api

  public addComments(category: any) {
    return this.afs.collection('Comments').add(category);
  }
  public getComments() {
    return this.afs.collection('Comments').snapshotChanges();
  }

  public deleteComment(comment: any) {
    return this.afs.doc('Comments/' + comment.id).delete();
  }

  //Contact Related Api

  public addContact(contact: any) {
    return this.afs.collection('Contact').add(contact);
  }
  public getContact() {
    return this.afs.collection('Contact').snapshotChanges();
  }

  public deleteContact(contact: any) {
    return this.afs.doc('Contact/' + contact.id).delete();
  }
}
