import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Suggestion } from 'src/app/Model/Suggestion';
import { SuggestionService } from '../suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit, OnDestroy {
  suggestions: Suggestion[] = [];
  private subscription?: Subscription;
  favorites: Suggestion[] = [];
  search: string = '';

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit() {
    // S'abonner aux changements de suggestions
    this.subscription = this.suggestionService.suggestions$.subscribe(
      suggestions => {
        this.suggestions = suggestions;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  likeSuggestion(s: Suggestion): void {
    const updatedSuggestion = { ...s, likes: s.likes + 1 };
    this.suggestionService.updateSuggestion(updatedSuggestion);
  }

  addToFavorites(s: Suggestion) {
    if (!this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }

  isFavorite(s: Suggestion) {
    return this.favorites.includes(s);
  }
}
