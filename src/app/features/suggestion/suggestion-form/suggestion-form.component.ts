import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Suggestion } from 'src/app/Model/Suggestion';
import { SuggestionService } from '../suggestion.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent {

  constructor(
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

   registerForm = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('^[A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞ][a-zA-ZÀ-ÿ\\s]*$')]),
    description: new FormControl('', [Validators.required,Validators.minLength(30)]),
    category: new FormControl('', Validators.required),
    date: new FormControl({ value: new Date(), disabled: true }),
    status: new FormControl({ value: 'en_attente', disabled: true })
  });

  onSubmit() {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
      
      // Créer la nouvelle suggestion
      const newSuggestion: Omit<Suggestion, 'id'> = {
        title: formValue.title || '',
        description: formValue.description || '',
        category: formValue.category || '',
        date: new Date(),
        status: 'en_attente',
        likes: 0
      };

      // Ajouter la suggestion via le service
      this.suggestionService.addSuggestion(newSuggestion);
      
      alert('Suggestion ajoutée avec succès!');
      this.router.navigate(['/suggestion']);
    } else {
      console.log('Formulaire invalide');
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel() {
    this.router.navigate(['/suggestion']);
  }

}
