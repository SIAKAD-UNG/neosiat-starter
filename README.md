## Neosiat Starter

### Standard Project Layout

```
  src -----------------> Sources
    | app -------------> Routes
    |  | _action ------> Usage for next server action
    |  | _internal ----> Client (current route usage): files, components, layout, ui lojik, ui component
    |  |    | components
    |  |    | hooks
    |  |    | lib
    |  |    | providers
    |  |    | use-cases
    |  |    | utils
    |  |    | forms
    |  | layout.tsx ----> Layout (optional)
    |  | page.tsx ------> Route Page (Wajib)
    | main -------------> Client (Global Usage): files, components, layout, ui lojik, ui component
    |  | components ----> components
    |  | hooks ---------> hooks
    |  | lib -----------> library
    |  | providers -----> Context, provider, global state
    |  | use-cases -----> client lojik, ui lojik
    |  | utils ---------> Penyedap rasa
    |  | forms ---------> Form components
    | lib --------------> Server usage (optional, global usage)
    |  | config --------> Server configuration
    |  | use-cases -----> Logic, data, model, entity
    |  | repository ----> query database, model data, database layer
    | middleware.ts
    | auth.ts
```

### Keterangan selanjutnya bisa dibaca pada docs/manual-book.md
