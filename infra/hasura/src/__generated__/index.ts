/* eslint-disable */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  json: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars["Boolean"]>;
  readonly _gt?: Maybe<Scalars["Boolean"]>;
  readonly _gte?: Maybe<Scalars["Boolean"]>;
  readonly _in?: Maybe<ReadonlyArray<Scalars["Boolean"]>>;
  readonly _is_null?: Maybe<Scalars["Boolean"]>;
  readonly _lt?: Maybe<Scalars["Boolean"]>;
  readonly _lte?: Maybe<Scalars["Boolean"]>;
  readonly _neq?: Maybe<Scalars["Boolean"]>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars["Boolean"]>>;
};

export type EmailInput = {
  readonly email: Scalars["String"];
  readonly secret_token: Scalars["uuid"];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars["Int"]>;
  readonly _gt?: Maybe<Scalars["Int"]>;
  readonly _gte?: Maybe<Scalars["Int"]>;
  readonly _in?: Maybe<ReadonlyArray<Scalars["Int"]>>;
  readonly _is_null?: Maybe<Scalars["Boolean"]>;
  readonly _lt?: Maybe<Scalars["Int"]>;
  readonly _lte?: Maybe<Scalars["Int"]>;
  readonly _neq?: Maybe<Scalars["Int"]>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars["Int"]>>;
};

export type PreviewDocument = {
  readonly cdtn_id?: Maybe<Scalars["String"]>;
  readonly document?: Maybe<Scalars["jsonb"]>;
  readonly source?: Maybe<Scalars["String"]>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars["String"]>;
  readonly _gt?: Maybe<Scalars["String"]>;
  readonly _gte?: Maybe<Scalars["String"]>;
  readonly _ilike?: Maybe<Scalars["String"]>;
  readonly _in?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly _is_null?: Maybe<Scalars["Boolean"]>;
  readonly _like?: Maybe<Scalars["String"]>;
  readonly _lt?: Maybe<Scalars["String"]>;
  readonly _lte?: Maybe<Scalars["String"]>;
  readonly _neq?: Maybe<Scalars["String"]>;
  readonly _nilike?: Maybe<Scalars["String"]>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly _nlike?: Maybe<Scalars["String"]>;
  readonly _nsimilar?: Maybe<Scalars["String"]>;
  readonly _similar?: Maybe<Scalars["String"]>;
};

/** order by aggregate values of table "document_relations" */
export type Document_Relations_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Document_Relations_Max_Order_By>;
  readonly min?: Maybe<Document_Relations_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "document_relations". All fields are combined with a logical 'AND'. */
export type Document_Relations_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Document_Relations_Bool_Exp>>>;
  readonly _not?: Maybe<Document_Relations_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Document_Relations_Bool_Exp>>>;
  readonly a?: Maybe<Documents_Bool_Exp>;
  readonly b?: Maybe<Documents_Bool_Exp>;
  readonly data?: Maybe<Jsonb_Comparison_Exp>;
  readonly document_a?: Maybe<String_Comparison_Exp>;
  readonly document_b?: Maybe<String_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly type?: Maybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "document_relations" */
export type Document_Relations_Max_Order_By = {
  readonly document_a?: Maybe<Order_By>;
  readonly document_b?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly type?: Maybe<Order_By>;
};

/** order by min() on columns of table "document_relations" */
export type Document_Relations_Min_Order_By = {
  readonly document_a?: Maybe<Order_By>;
  readonly document_b?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly type?: Maybe<Order_By>;
};

/** ordering options when selecting data from "document_relations" */
export type Document_Relations_Order_By = {
  readonly a?: Maybe<Documents_Order_By>;
  readonly b?: Maybe<Documents_Order_By>;
  readonly data?: Maybe<Order_By>;
  readonly document_a?: Maybe<Order_By>;
  readonly document_b?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly type?: Maybe<Order_By>;
};

/** primary key columns input for table: "document_relations" */
export type Document_Relations_Pk_Columns_Input = {
  readonly id: Scalars["uuid"];
};

/** select columns of table "document_relations" */
export enum Document_Relations_Select_Column {
  /** column name */
  Data = "data",
  /** column name */
  DocumentA = "document_a",
  /** column name */
  DocumentB = "document_b",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
}

/** order by aggregate values of table "documents" */
export type Documents_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Documents_Max_Order_By>;
  readonly min?: Maybe<Documents_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "documents". All fields are combined with a logical 'AND'. */
export type Documents_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Documents_Bool_Exp>>>;
  readonly _not?: Maybe<Documents_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Documents_Bool_Exp>>>;
  readonly cdtn_id?: Maybe<String_Comparison_Exp>;
  readonly created_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly document?: Maybe<Jsonb_Comparison_Exp>;
  readonly initial_id?: Maybe<String_Comparison_Exp>;
  readonly is_available?: Maybe<Boolean_Comparison_Exp>;
  readonly is_published?: Maybe<Boolean_Comparison_Exp>;
  readonly is_searchable?: Maybe<Boolean_Comparison_Exp>;
  readonly meta_description?: Maybe<String_Comparison_Exp>;
  readonly relation_a?: Maybe<Document_Relations_Bool_Exp>;
  readonly relation_b?: Maybe<Document_Relations_Bool_Exp>;
  readonly slug?: Maybe<String_Comparison_Exp>;
  readonly source?: Maybe<String_Comparison_Exp>;
  readonly text?: Maybe<String_Comparison_Exp>;
  readonly title?: Maybe<String_Comparison_Exp>;
  readonly updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "documents" */
export type Documents_Max_Order_By = {
  readonly cdtn_id?: Maybe<Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly initial_id?: Maybe<Order_By>;
  readonly meta_description?: Maybe<Order_By>;
  readonly slug?: Maybe<Order_By>;
  readonly source?: Maybe<Order_By>;
  readonly text?: Maybe<Order_By>;
  readonly title?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
};

/** order by min() on columns of table "documents" */
export type Documents_Min_Order_By = {
  readonly cdtn_id?: Maybe<Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly initial_id?: Maybe<Order_By>;
  readonly meta_description?: Maybe<Order_By>;
  readonly slug?: Maybe<Order_By>;
  readonly source?: Maybe<Order_By>;
  readonly text?: Maybe<Order_By>;
  readonly title?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
};

/** ordering options when selecting data from "documents" */
export type Documents_Order_By = {
  readonly cdtn_id?: Maybe<Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly document?: Maybe<Order_By>;
  readonly initial_id?: Maybe<Order_By>;
  readonly is_available?: Maybe<Order_By>;
  readonly is_published?: Maybe<Order_By>;
  readonly is_searchable?: Maybe<Order_By>;
  readonly meta_description?: Maybe<Order_By>;
  readonly relation_a_aggregate?: Maybe<Document_Relations_Aggregate_Order_By>;
  readonly relation_b_aggregate?: Maybe<Document_Relations_Aggregate_Order_By>;
  readonly slug?: Maybe<Order_By>;
  readonly source?: Maybe<Order_By>;
  readonly text?: Maybe<Order_By>;
  readonly title?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "documents" */
export type Documents_Pk_Columns_Input = {
  readonly cdtn_id: Scalars["String"];
};

/** select columns of table "documents" */
export enum Documents_Select_Column {
  /** column name */
  CdtnId = "cdtn_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Document = "document",
  /** column name */
  InitialId = "initial_id",
  /** column name */
  IsAvailable = "is_available",
  /** column name */
  IsPublished = "is_published",
  /** column name */
  IsSearchable = "is_searchable",
  /** column name */
  MetaDescription = "meta_description",
  /** column name */
  Slug = "slug",
  /** column name */
  Source = "source",
  /** column name */
  Text = "text",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
}

/** Boolean expression to filter rows from the table "glossary". All fields are combined with a logical 'AND'. */
export type Glossary_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Glossary_Bool_Exp>>>;
  readonly _not?: Maybe<Glossary_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Glossary_Bool_Exp>>>;
  readonly abbreviations?: Maybe<Jsonb_Comparison_Exp>;
  readonly created_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly definition?: Maybe<String_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly references?: Maybe<Jsonb_Comparison_Exp>;
  readonly slug?: Maybe<String_Comparison_Exp>;
  readonly term?: Maybe<String_Comparison_Exp>;
  readonly updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly variants?: Maybe<Jsonb_Comparison_Exp>;
};

/** ordering options when selecting data from "glossary" */
export type Glossary_Order_By = {
  readonly abbreviations?: Maybe<Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly definition?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly references?: Maybe<Order_By>;
  readonly slug?: Maybe<Order_By>;
  readonly term?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
  readonly variants?: Maybe<Order_By>;
};

/** primary key columns input for table: "glossary" */
export type Glossary_Pk_Columns_Input = {
  readonly id: Scalars["uuid"];
};

/** select columns of table "glossary" */
export enum Glossary_Select_Column {
  /** column name */
  Abbreviations = "abbreviations",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Definition = "definition",
  /** column name */
  Id = "id",
  /** column name */
  References = "references",
  /** column name */
  Slug = "slug",
  /** column name */
  Term = "term",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Variants = "variants",
}

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars["json"]>;
  readonly _gt?: Maybe<Scalars["json"]>;
  readonly _gte?: Maybe<Scalars["json"]>;
  readonly _in?: Maybe<ReadonlyArray<Scalars["json"]>>;
  readonly _is_null?: Maybe<Scalars["Boolean"]>;
  readonly _lt?: Maybe<Scalars["json"]>;
  readonly _lte?: Maybe<Scalars["json"]>;
  readonly _neq?: Maybe<Scalars["json"]>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars["json"]>>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  readonly _contained_in?: Maybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  readonly _contains?: Maybe<Scalars["jsonb"]>;
  readonly _eq?: Maybe<Scalars["jsonb"]>;
  readonly _gt?: Maybe<Scalars["jsonb"]>;
  readonly _gte?: Maybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  readonly _has_key?: Maybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  readonly _has_keys_all?: Maybe<ReadonlyArray<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  readonly _has_keys_any?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly _in?: Maybe<ReadonlyArray<Scalars["jsonb"]>>;
  readonly _is_null?: Maybe<Scalars["Boolean"]>;
  readonly _lt?: Maybe<Scalars["jsonb"]>;
  readonly _lte?: Maybe<Scalars["jsonb"]>;
  readonly _neq?: Maybe<Scalars["jsonb"]>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars["jsonb"]>>;
};

/** Boolean expression to filter rows from the table "kali_blocks". All fields are combined with a logical 'AND'. */
export type Kali_Blocks_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Kali_Blocks_Bool_Exp>>>;
  readonly _not?: Maybe<Kali_Blocks_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Kali_Blocks_Bool_Exp>>>;
  readonly blocks?: Maybe<Jsonb_Comparison_Exp>;
  readonly id?: Maybe<String_Comparison_Exp>;
  readonly idcc?: Maybe<Int_Comparison_Exp>;
  readonly title?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "kali_blocks" */
export type Kali_Blocks_Order_By = {
  readonly blocks?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly idcc?: Maybe<Order_By>;
  readonly title?: Maybe<Order_By>;
};

/** primary key columns input for table: "kali_blocks" */
export type Kali_Blocks_Pk_Columns_Input = {
  readonly id: Scalars["String"];
};

/** select columns of table "kali_blocks" */
export enum Kali_Blocks_Select_Column {
  /** column name */
  Blocks = "blocks",
  /** column name */
  Id = "id",
  /** column name */
  Idcc = "idcc",
  /** column name */
  Title = "title",
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** Boolean expression to filter rows from the table "package_version". All fields are combined with a logical 'AND'. */
export type Package_Version_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Package_Version_Bool_Exp>>>;
  readonly _not?: Maybe<Package_Version_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Package_Version_Bool_Exp>>>;
  readonly created_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly repository?: Maybe<String_Comparison_Exp>;
  readonly updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly version?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "package_version" */
export type Package_Version_Order_By = {
  readonly created_at?: Maybe<Order_By>;
  readonly repository?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
  readonly version?: Maybe<Order_By>;
};

/** primary key columns input for table: "package_version" */
export type Package_Version_Pk_Columns_Input = {
  readonly repository: Scalars["String"];
};

/** select columns of table "package_version" */
export enum Package_Version_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Repository = "repository",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Version = "version",
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars["timestamptz"]>;
  readonly _gt?: Maybe<Scalars["timestamptz"]>;
  readonly _gte?: Maybe<Scalars["timestamptz"]>;
  readonly _in?: Maybe<ReadonlyArray<Scalars["timestamptz"]>>;
  readonly _is_null?: Maybe<Scalars["Boolean"]>;
  readonly _lt?: Maybe<Scalars["timestamptz"]>;
  readonly _lte?: Maybe<Scalars["timestamptz"]>;
  readonly _neq?: Maybe<Scalars["timestamptz"]>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars["timestamptz"]>>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars["uuid"]>;
  readonly _gt?: Maybe<Scalars["uuid"]>;
  readonly _gte?: Maybe<Scalars["uuid"]>;
  readonly _in?: Maybe<ReadonlyArray<Scalars["uuid"]>>;
  readonly _is_null?: Maybe<Scalars["Boolean"]>;
  readonly _lt?: Maybe<Scalars["uuid"]>;
  readonly _lte?: Maybe<Scalars["uuid"]>;
  readonly _neq?: Maybe<Scalars["uuid"]>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars["uuid"]>>;
};
