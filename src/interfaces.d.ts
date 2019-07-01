import "firebase";

declare global {
  namespace ML {
    namespace User {
      export interface document {
        /**
         * The user's email address
         */
        email?: string;
        /**
         * The user's full name
         */
        name?: string;
      }

      export interface queryDocumentSnapshot
        extends firebase.firestore.QueryDocumentSnapshot {
        data(options?: firebase.firestore.SnapshotOptions): document;
      }

      export interface colllection extends firebase.firestore.QuerySnapshot {
        readonly docs: queryDocumentSnapshot[];
      }

      export interface documentSnapshot
        extends firebase.firestore.DocumentSnapshot {
        data(options?: firebase.firestore.SnapshotOptions): document;
      }
      export interface documentReference
        extends firebase.firestore.DocumentReference {
        get(): Promise<documentSnapshot>;
      }
    }
  }
}
